import React, { createContext, useEffect, useState } from "react";

export const ResponsiveContext = createContext();

export const ResponsiveProvider = ({ children }) => {

  const [Under1600, setUnder1600] = useState(null);
  const [Under1280, setUnder1280] = useState(null)
  const [Under1024, setUnder1024] = useState(null)
  const [Under700, setUnder700] = useState(null)
  const [Under500, setUnder500] = useState(null)
  const [Under350, setUnder350] = useState(null)
  const [StopShowProfileImg, seStopShowProfileImg] = useState(null)

  const [Ready, setReady] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setUnder1600((window.innerWidth <= 1600))
      setUnder1280((window.innerWidth <= 1280))
      setUnder1024((window.innerWidth <= 1024))
      setUnder700((window.innerWidth <= 700))
      setUnder500((window.innerWidth <= 500))
      setUnder350((window.innerWidth <= 350))
      seStopShowProfileImg((window.innerWidth <= 1125))
      setReady(true);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [])

  return (
      <ResponsiveContext.Provider value={{ Under1600, Under1280, Under1024, Under700, Under500, Under350, StopShowProfileImg }}>
        {Ready && children}
      </ResponsiveContext.Provider>
    )
}

