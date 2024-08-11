import { useEffect, useState } from "react";

/**
 * @name useScroll
 * @description 스크롤 위치에 따른 반응형 디자인을 적용하기 위한 용도.
 */
export const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = (event) => {
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};
