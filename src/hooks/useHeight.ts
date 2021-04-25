import React, { ReactElement, useEffect, useState } from "react";

function useHeight(): number {
  const [windowHeight, setWindowHeight] = useState(window?.innerHeight);
  useEffect(() => {
    const resizeHandler = () => {
      setWindowHeight(window?.innerHeight);
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);
  return windowHeight;
}

export default useHeight;
