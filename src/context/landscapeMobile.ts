import { createContext } from "react";
import { isMobile, isTablet } from "react-device-detect";

export const isLandscapeMobileContext = createContext(isMobile && !isTablet);