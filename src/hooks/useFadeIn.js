import { useEffect, useRef } from "react";

/**
 * @name useFadeIn
 * @description 페이드인 시키는 hook. 
 * @param {number} duration opacity 값
 * @param {number} delay delay시킬 값
 */
export const useFadeIn = (duration = 1, delay = 0) => {
    const element = useRef();
    useEffect(() => {
      if (typeof duration !== "number" || typeof delay !== "number") {
        return;
      }
      const { current } = element;
      if (element.current) {
        // 리플로우를 강제로 발생시키면서 값을 사용하지 않음을 명확하게 밝힘
        void current.offsetWidth;
        current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
        current.style.opacity = 1;
      }
    },[]);
    return { ref: element, style: { opacity: 0 } };
  };