import { useEffect, useState } from "react";
/**
 * @name useNetwork
 * @description 네트워크 상태를 확인하고 온라인인지 오프라인인지 확인하는 훅
 */
export const useNetwork = onchange => {
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {
        if(typeof onchange === "function"){
            onchange(navigator.onLine);
        }
        setStatus(navigator.onLine);
    };
    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);
        }
    }, [])
    return status;
}