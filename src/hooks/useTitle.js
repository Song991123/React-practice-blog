import { useEffect, useState } from "react";

/** 
 * @name useTitle
 * @description 사이트 접속 시 웹사이트 명을 바꿔주는 hook*/
export const useTitle = (initialTitle) => {
    const [title, setTItle] = useState(initialTitle);
    const updateTitle = () =>{
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    }
    useEffect(updateTitle, [title]);
    return setTItle;
}