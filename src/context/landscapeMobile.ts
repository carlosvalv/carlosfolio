import { useState, useEffect, createContext } from "react";
import { isMobile, isTablet } from "react-device-detect";

export const isLandscapeMobileContext = createContext(isMobile && !isTablet);

export const useIsLandscapeMobile = () => {
  const [isLandscape, setIsLandscape] = useState(
    isMobile && !isTablet && window.innerWidth > window.innerHeight
  );

  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(
        isMobile && !isTablet && window.innerWidth > window.innerHeight
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isLandscape;
};
