import React, { useCallback, useContext, useEffect, useState } from "react";
import Hls from "hls.js";
import "./VideoControlerBar.css";
import PlayVideo from "./Assets/PlayVideo.svg";
import StopVideo from "./Assets/StopVideo.svg";
import Rewind15 from "./Assets/Rewind15.svg";
import Forward15 from "./Assets/Forward15.svg";
import Fullscreen from "./Assets/Fullscreen.svg";
import MuteImg from "./Assets/Mute.svg";
import UnMuteImg from "./Assets/UnMute.svg";
import { ResponsiveContext } from "../../Context/ResponsiveContext";

const VideoControlerBar = ({
  videoRef,
  currentVideo,
  IsPlaying,
  setIsPlaying,
  isMuted,
  setIsMuted,
  totalTime,
  elapsedTime,
}) => {

  const { Under350, Under700 } = useContext(ResponsiveContext);

  const [buffered, setBuffered] = useState(0);
  const [progress, setProgress] = useState(0);

  // Update progress and buffered state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const bufferedTime = video.buffered.length
        ? video.buffered.end(video.buffered.length - 1)
        : 0;
      setProgress((video.currentTime / video.duration) * 100 || 0);
      setBuffered((bufferedTime / video.duration) * 100 || 0);
    };

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("progress", updateProgress);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("progress", updateProgress);
    };
  }, [videoRef]);

  // Rewind 15 seconds
  const rewind15 = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Math.max(video.currentTime - 15, 0);
  };

  // Play/Pause handler
  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Forward 15 seconds
  const forward15 = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Math.min(video.currentTime + 15, video.duration || video.currentTime);
  };

  // Mute/Unmute function
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

// Fullscreen function
const handleFullScreen = () => {
  const video = videoRef.current;
  if (!video) return;

  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  } else if (video.webkitEnterFullscreen) {
    // For iOS Safari
    video.webkitEnterFullscreen();
  }
};


  // Format time for display
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  // Handle video progress
  const handleVideoProgress = (event) => {
    const video = videoRef.current;
    if (!video) return;
    const manualChange = Number(event.target.value);
    video.currentTime = (manualChange / 100) * video.duration;
  };

  const [hlsInstance, setHlsInstance] = useState(null);
  const [availableQualities, setAvailableQualities] = useState([]);
  const [selectedQuality, setSelectedQuality] = useState("auto");

  useEffect(() => {
    if (videoRef.current && currentVideo) {
      const video = videoRef.current;

      if (Hls.isSupported()) {
        const hls = new Hls({
          maxBufferLength: 20, // Buffer up to 10 seconds
          maxMaxBufferLength: 20, // Prevent HLS.js from expanding the buffer
          maxBufferSize: 10 * 1024 * 1024, // Maximum buffer size (10 MB)
          lowBufferWatchdogPeriod: 0.5, // Check for low buffer every 0.5 seconds
        });
        setHlsInstance(hls);

        hls.loadSource(currentVideo.src);
        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          // Extract available qualities
          const levels = hls.levels.map((level, index) => ({
            quality: `${level.height}p`,
            index,
          }));
          setAvailableQualities([{ quality: "auto", index: -1 }, ...levels]);
        });

        hls.on(Hls.Events.ERROR, (event, data) => {
          console.error("HLS error:", data);
        });

        return () => {
          hls.destroy(); // Clean up HLS instance on unmount
          setHlsInstance(null);
        };
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = currentVideo.src;
      }
    }
  }, [currentVideo, videoRef]);

  const handleQualityChange = (qualityIndex) => {
    if (hlsInstance) {
      if (qualityIndex === -1) {
        // Auto mode
        hlsInstance.currentLevel = -1;
      } else {
        // Set specific quality
        hlsInstance.currentLevel = qualityIndex;
      }

      // Update selectedQuality state
      const selected = qualityIndex === -1
        ? "auto"
        : availableQualities.find((q) => q.index === qualityIndex)?.quality;

      setSelectedQuality(selected || "auto");
    }
  };


  return (
    <div className="custom-controls-container">

      <div className="box-controls">
        {!Under350 && (
          <div onClick={rewind15} className="rewind-btn">
            <img src={Rewind15} alt="Rewind 15 seconds" />
          </div>
        )}

        <div onClick={togglePlayPause} className="play-pause-btn" style={{ margin: "0 10px" }}>
          <img src={IsPlaying ? StopVideo : PlayVideo} alt="Play/Pause" />
        </div>

        {!Under350 && (
          <div onClick={forward15} className="forward-btn">
            <img src={Forward15} alt="Forward 15 seconds" />
          </div>
        )}

        <div className="box-control-right">
          {/* Quality Selector */}
          <div className="quality-selector">
            <select
              id="quality-select"
              value={availableQualities.find((q) => q.quality === selectedQuality)?.index ?? -1}
              onChange={(e) => handleQualityChange(Number(e.target.value))}
            >
              {availableQualities.map((quality) => (
                <option key={quality.index} value={quality.index}>
                  {quality.quality}
                </option>
              ))}
            </select>

          </div>

          <div
            onClick={toggleMute}
            className="mute-btn"
            style={{ marginRight: "10px", display: Under700 && "none" }}
          >
            <img src={isMuted ? MuteImg : UnMuteImg} alt="Mute/Unmute" />
          </div>

          <div onClick={handleFullScreen} className="fullscreen-btn">
            <img src={Fullscreen} alt="Fullscreen" />
          </div>

        </div>

        <div className="box-control-left">
          <div className="time-display">
            <span>{formatTime(elapsedTime)}</span> / <span>{formatTime(totalTime)}</span>
          </div>
        </div>
      </div>

      <div className="progress-bar-Container">
        <div
          className="progress-bar-background"
          style={{
            background: `linear-gradient(to right,
           var(--Primary-EZ) ${progress}%,
            var(--Divider-Background-Color) ${progress}%,
             var(--Divider-Background-Color) ${buffered}%,
              var(--Gray-EZ-05) ${buffered}%)`,
          }}
        ></div>
        <input
          className="progress-bar-slider"
          type="range"
          id="video-progress"
          min="0"
          max="100"
          value={progress}
          onChange={handleVideoProgress}
        />
      </div>
    </div>
  );
};

export default VideoControlerBar;
