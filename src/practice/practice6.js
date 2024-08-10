/* custom hook 연습용 페이지 */
import { useEffect, useRef, useState } from "react";
import { useInput } from "../hooks/useInput";
import { useTabs } from "../hooks/useTabs";
import { useTitle } from "../hooks/useTitle";
import { useClick } from "../hooks/useClick";
import { useConfirm } from "../hooks/useConfirm";

const content = [
    {
        tab : "Section 1",
        content : "I'm the content of the Section 1"
    },
    {
        tab : "Section 2",
        content : "I'm the content of the Section 2"
    }
];



function Practice6() {
    const sayHello = () => console.log("Hello");
    const deleteWorld = () => console.log("Deleting the World");
    const abort = () => console.log("Aborted");
    const titleUpdater = useTitle("Loading…");
    const maxLen = value => (value.length <= 10);
    
    const reference = useRef();

    useEffect(() => {
        setTimeout(() => reference.current.focus(), 500);
        setTimeout(() => titleUpdater("Practice6"), 500);
    }, [])
    

    const name = useInput("Mr. " , maxLen);
    const { currentItem, changeItem } = useTabs(0, content);
    const title = useClick(sayHello);
    const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);

    return(
        <div className="content-div">
            <h1>커스텀 훅 연습용 페이지</h1>
            <hr/>
            <div>
                <h3>UseInput</h3>
                <input placeholder="Name" {...name}/>
            </div>
            <div>
                <h3>UseTabs</h3>
                {content.map((section, index) => <button onClick={() => changeItem(index)}>{section.tab}</button>)}
                <div>{currentItem.content}</div>
            </div>
            <div>
                <h3>UseRef(Not custom hook)</h3>
                <div>Hi</div>
                <input ref={reference} placeholder="0.5초 내로 여기에 focus"/>
            </div>
            <div>
                <h3>UseClick</h3>
                <p ref={title} style={{cursor:"pointer"}}>Click Here(출력 정보는 콘솔창 확인)</p>
            </div>
            <div>
                <h3>useConfirm</h3>
                <button onClick={confirmDelete}>Delete the world</button>
                <p>(결과는 콘솔창 확인)</p>
            </div>
        </div>
    )
}
export default Practice6;
