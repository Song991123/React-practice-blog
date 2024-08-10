import { useEffect, useRef } from "react";
/** 
 * @name useClick
 * @description useRef를 이용해 재렌더링하지 않고 클릭에 반응하는 hook*/
export const useClick = (onClick) => {
    const element = useRef();
    useEffect(() => {
        // 들어온게 function 타입이 아니면 return
        if (typeof onClick !== "function"){
            return;
        }
        // mount될 때
        if(element.current){
            element.current.addEventListener("click", onClick);
        }
        // unmount 될 때
        return () => {
            if(element.current){
                element.current.removeEventListener("click", onClick);
            }
        };
    }, []);

    return element;
}