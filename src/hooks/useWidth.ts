import { useEffect, useState } from "react";

function useWidth(): number {
  const [windowWidth, setWindowWidth] = useState(window?.innerWidth);
  useEffect(() => {
    const resizeHandler = () => {
      setWindowWidth(window?.innerWidth);
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);
  return windowWidth;
}

export default useWidth;
