import { useState } from "react";
import styled from "styled-components";

let RoundSpan = styled.span`
  background-color: black;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  padding-top: 2px;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  color: white;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
  }
`;

function Practice3() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((current) => [...current, toDo]);
    setToDo("");
  };

  return (
    <div className="content-div">
      <h1>
        My toDos{" "}
        <RoundSpan>
          <p>{toDos.length}</p>
        </RoundSpan>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="input-group mb-3" style={{width :"500px", margin:"auto"}}>
            <input type="text" className="form-control" placeholder="Write your to do..." aria-label="Write your to do..." aria-describedby="button-addon2" onChange={onChange} value={toDo}/>
            <button className="btn btn-outline-secondary">Add To do</button>
        </div>
      </form>
      <ul className="list-group">
        {toDos.map(function (item, index) {
          return (
            <li className="list-group-item" key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Practice3;
