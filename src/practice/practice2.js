import styled from "styled-components";
import PropTypes from "prop-types";

let BlackBtn = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
`;

function Practice2() {
//   const text = 'string값으로 변경하면 오류가 안뜨고';
//   const text = 12;
  const valid = "콘솔에 글자 적었음";
  return (
    <div className="content-div">
      <TextProps valid={valid}></TextProps>
    </div>
  );
}

export default Practice2;

// ----------------------- propsType Setting -----------------------

TextProps.propTypes = {
  text: PropTypes.string.isRequired,
  valid: PropTypes.string,
};

// ----------------------- propsType Test Component -----------------------
function TextProps({text = "일부러 값을 설정안해준경우 default가 뜬다", valid}) {
  function btnEvent() {
    console.log(valid);
  }

  return (
    <div>
      <h1>{text}</h1>
      <br />
      <BlackBtn onClick={() => btnEvent()}>콘솔 창에 메시지 띄우기</BlackBtn>
    </div>
  );
}
