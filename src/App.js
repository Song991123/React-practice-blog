import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Practice1 from "./practice/practice1";
import Practice2 from "./practice/practice2";
import Practice3 from "./practice/practice3";
import Practice4 from "./practice/practice4";
import { useState } from "react";


function App() {
  let navigate = useNavigate();
  let [menuState, setMenuState] = useState('');

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" onClick={() =>{navigate('/')}} style={{cursor:"pointer"}}>Maren's practice blog</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation" onClick={() => {setMenuState('show')}}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`offcanvas offcanvas-end text-bg-dark ${menuState}`} tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => {setMenuState('hiding')}}></button>
            </div>
            <hr style={{margin:"-2px 0px -2px"}}/>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link" onClick={() =>{navigate('/Practice1')}}>Practice1</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={() =>{navigate('/Practice2')}}>Practice2</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={() =>{navigate('/Practice3')}}>Practice3</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={() =>{navigate('/Practice4')}}>Practice4</a>
                </li>
              </ul>
            </div> 
          </div>
          {
            menuState === 'show' ?  <div className="offcanvas-backdrop fade show" onClick={() => {setMenuState('hiding')}}></div> : null 
          }
        </div>
      </nav>
          
      <Routes>
        <Route path="/" element={<div className="content-div"><h3>마렌의 리엑트 연습용 블로그입니다.</h3></div>} />
        <Route path="/Practice1" element={<Practice1 />}/>
        <Route path="/Practice2" element={<Practice2 />}/>
        <Route path="/Practice3" element={<Practice3 />}/> 
        <Route path="/Practice4" element={<Practice4 />}/> 
      </Routes>
    </div>
  );
}


export default App;