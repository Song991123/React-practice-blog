import { useRef, useState } from "react";


export const useFullscreen = (callback) => {
    const element = useRef();
    const [isFullscreen, setIsFullscreen] = useState(false);
  
    const triggerFull = () => {
      if (element.current) {
        element.current.requestFullscreen();
        if (callback && typeof callback === "function") {
          callback(true);
        }
        setIsFullscreen(true);
      }
    };
    const exitFull = () => {
      document.exitFullscreen();
      if (callback && typeof callback === "function") {
        callback(false);
      }
      setIsFullscreen(false);
    };
    return { element, triggerFull, exitFull, isFullscreen };
  };