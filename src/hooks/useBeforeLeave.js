import { useEffect } from "react";
/**
 * @name useBeforeLeave
 * @description 마우스가 페이지 밖을 벗어났을 때 작동시키는 hook
 */
export const useBeforeLeave = (onBefore) => {

    const handle = (event) => {
        const { clientY } = event;
        if(clientY <= 0){
            onBefore();
        }
    }
    useEffect(() => {
        if(typeof onBefore !== "function"){
            return;
        }
        document.addEventListener("mouseleave", handle);
        return () => {
            document.removeEventListener("mouseleave", handle);
        }
    }, [])
}