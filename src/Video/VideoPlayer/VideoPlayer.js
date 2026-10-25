import React, { useEffect, useState } from "react";
import Hls from "hls.js";
import LoadingDots from "../../Pages/Auth/Components/LoadingDots";

const VideoPlayer = ({
  videoRef,
  currentVideo,
  setTotalTime,
  setProgress,
  setIsPlaying,
  setElapsedTime,
  setVideoMenuShow,
  setIsMuted,
}) => {
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (videoRef.current && currentVideo) {
      const video = videoRef.current;

      // Initialize HLS for supported browsers
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(currentVideo.src);
        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          setIsLoading(false);
          setTotalTime(video.duration);
        });

        hls.on(Hls.Events.ERROR, (event, data) => {
          console.error("HLS error:", data);
        });

        return () => {
          hls.destroy(); // Clean up HLS instance on unmount
        };

      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        // Fallback for browsers that natively support HLS
        video.src = currentVideo.src;
        video.addEventListener("loadedmetadata", () => {
          setIsLoading(false);
          setTotalTime(video.duration);
        });
      }
    }
  }, [currentVideo, videoRef, setTotalTime]);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    const currentTime = video.currentTime;
    setElapsedTime(currentTime);

    const progressValue = (currentTime / video.duration) * 100;
    setProgress(progressValue);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setVideoMenuShow(true);
  };

  const handleVideoLoadStart = () => {
    setIsLoading(true); // Show loading dots
  };

  const handleVideoReady = () => {
    setIsLoading(false); // Hide loading dots
    setTotalTime(videoRef.current.duration);
  };

  const handleVideoClick = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Error playing video:", error);
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="video-player-container" onClick={handleVideoClick}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {IsLoading && <LoadingDots Color="white" />}
      </div>

      <video
        ref={videoRef}
        tabIndex="0" // Make the video focusable
        className="video-player"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleVideoEnd}
        controls={false}
        playsInline
        onLoadStart={handleVideoLoadStart}
        onCanPlay={handleVideoReady}
        poster={currentVideo.Poster}
      >
        <source src={currentVideo.src} type="application/vnd.apple.mpegurl" />
        خطا در نمایش ویدیو
      </video>

    </div>
  );
};

export default VideoPlayer;
