/* custom hook 연습용 페이지 */
import { useEffect, useRef, useState } from "react";
import { useInput } from "../hooks/useInput";
import { useTabs } from "../hooks/useTabs";
import { useTitle } from "../hooks/useTitle";
import { useClick } from "../hooks/useClick";
import { useConfirm } from "../hooks/useConfirm";
import { usePreventLeave } from "../hooks/usePreventLeave";
import { useBeforeLeave } from "../hooks/useBeforeLeave";
import { useFadeIn } from "../hooks/useFadeIn";
import { useNetwork } from "../hooks/useNetwork";
import { useScroll } from "../hooks/useScroll";
import { useNotification } from "../hooks/useNotification";
import { useFullscreen } from "../hooks/useFullscreen";
import { BlackBtn } from "../styled/Btn";
import styled from "styled-components";

const BtnBox = styled.div`
    display: flex;
    justify-content: center;
    gap: 5px;
`;

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];


function Practice6() {
  const sayHello = () => console.log("Hello");
  const deleteWorld = () => console.log("Deleting the World");
  const abort = () => console.log("Aborted");
  const begForLife = () => console.log("Plz don't leave");
  const titleUpdater = useTitle("Loading…");
  const maxLen = (value) => value.length <= 10;
  const handleNetworkChange = (online) => {
    console.log(online ? "We just went online" : "We are Offline");
  };
  const onFullScreen = (isFull) => {
    console.log(isFull ? "We are full" : "We are Small");
  }

  const reference = useRef();

  useEffect(() => {
    const focusTimer = setTimeout(() => reference.current.focus(), 500);
    const titleTimer = setTimeout(() => titleUpdater("Practice6"), 500);
    return () => {
      clearTimeout(focusTimer);
      clearTimeout(titleTimer);
    };
  }, []);

  useBeforeLeave(begForLife);

  const name = useInput("Mr. ", maxLen);
  const { currentItem, changeItem } = useTabs(0, content);
  const title = useClick(sayHello);
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  const { enablePrevent, disablePrevent } = usePreventLeave();
  const fadeInHello = useFadeIn(1, 0);
  const fadeInName = useFadeIn(1, 1);

  const online = useNetwork(handleNetworkChange);
  const { y } = useScroll();
  const { element, triggerFull, exitFull,isFullscreen } = useFullscreen(onFullScreen);
  const triggerNotif = useNotification("테스트 알람창", {body: "테스트를 확인했습니다."});


  return (
    <div className="content-div" style={{ height: "150vh" }}>
      <h1>커스텀 훅 연습용 페이지</h1>
      <hr />
      <div>
        <h3>UseInput</h3>
        <input placeholder="Name" {...name} />
      </div>
      <div>
        <h3>UseTabs</h3>
        <BtnBox>
            {content.map((section, index) => (
              <BlackBtn key={index} onClick={() => changeItem(index)}>{section.tab}</BlackBtn>
            ))}
        </BtnBox>
        <div>{currentItem.content}</div>
      </div>
      <div>
        <h3>UseRef(Not custom hook)</h3>
        <div>Hi</div>
        <input ref={reference} placeholder="0.5초 내로 여기에 focus" />
      </div>
      <div>
        <h3>UseClick</h3>
        <p ref={title} style={{ cursor: "pointer" }}>
          Click Here(출력 정보는 콘솔창 확인)
        </p>
      </div>
      <div>
        <h3>useConfirm</h3>
        <BlackBtn onClick={confirmDelete}>Delete the world</BlackBtn>
        <p>(확인, 취소에 따른 결과는 콘솔창 확인)</p>
      </div>
      <div>
        <h3>usePreventLeave</h3>
        <BtnBox>
            <BlackBtn onClick={enablePrevent}>Protect</BlackBtn>
            <BlackBtn onClick={disablePrevent}>Unprotect</BlackBtn>
        </BtnBox>

        <p>
          Protect를 누르고 창을 벗어나려 하면 알림창이 뜨고, Unprotect를 누르면
          그냥 벗어날 수 있다.
        </p>
      </div>
      <div>
        <h3>useFadeIn</h3>
        <p {...fadeInHello}>Hello</p>
        <p {...fadeInName}>I'm maren</p>
      </div>
      <div>
        <h3>useNetwork</h3>
        <p>{online ? "Online" : "Offline"}</p>
      </div>
      <div>
        <h3
          style={{
            left: "20px",
            top: "200px",
            position: "fixed",
            color: y > 100 ? "red" : "blue",
          }}
        >
          useScroll
        </h3>
      </div>
      <div>
        <h3>useFullscreen</h3>
        <div ref={element}>
          <img
            src="https://i.ibb.co/R6RwNxx/grape.jpg"
            alt="grape"
            width="250"
          />
          <br/>
          {isFullscreen ? <BlackBtn onClick={exitFull}>Exit fullscreen</BlackBtn>: null}
        </div>
        <BlackBtn onClick={triggerFull}>Make fullscreen</BlackBtn>
      </div>
      <div>
        <h3>useNotification</h3>
        <BlackBtn onClick={triggerNotif}>알람창 띄우기</BlackBtn>
      </div>
    </div>
  );
}
export default Practice6;
