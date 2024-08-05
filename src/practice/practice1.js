import { useState } from 'react';

function Practice1() {
  let [index, setIndex] = useState(0);
  const onSelect = (event) => {
    setIndex(event.target.value);
  };

  return (
    <div className='content-div'>
      <select onChange={onSelect}>
        <option>-----------------------</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      <SwitchContents index={index} />
    </div>
  );
}

export default Practice1;

function SwitchContents(props){
    switch (props.index){
      case '0' :
        return <MinutesToHours/>
      case '1' :
        return <KmToMile/>
      default:
        return <h1>Select your units</h1>
    }
  }
  
  
  function MinutesToHours(){
    const [amount, setAmount] = useState(0);
    const [flipped, setFlipped] = useState(false);
  
    const onChangeAmount = (event) => {
      setAmount(event.target.value);
    };
    const onClickFlipped = () => {
      reset();
      setFlipped(current => !current);
    };
    const reset = () =>{
      setAmount(0);
    };
  
    return(
    <div>
      <div>
        <h1>Super Converter</h1>
        <label htmlFor='minutes'>minutes</label>
        <input id='minutes' placeholder='Minutes' type='number' value={flipped ? amount*60 : amount} onChange={onChangeAmount} disabled={flipped}></input>
        <label htmlFor='hours'>Hours</label>
        <input id='hours' placeholder='Hours' type='number' value={flipped ? amount : Math.round(amount/60) } disabled={!flipped} onChange={onChangeAmount}></input>
      </div>
      <button onClick={() => {reset()}}>Reset</button>
      <button onClick={() => {onClickFlipped()}}>Flipped</button>
    </div>
    )
  }
  
  function KmToMile(){
    const [amount, setAmount] = useState(0);
    const [flipped, setFlipped] = useState(false);
  
    const onChangeAmount = (event) => {
      setAmount(event.target.value);
    };
    const onClickFlipped = () => {
      reset();
      setFlipped(current => !current);
    };
    const reset = () =>{
      setAmount(0);
    };
  
    return(
    <div>
      <div>
        <h1>Super Converter</h1>
        <label htmlFor='km'>Km</label>
        <input id='km' placeholder='km' type='number' value={flipped ? amount*1.60934 : amount} onChange={onChangeAmount} disabled={flipped}></input>
        <label htmlFor='mile'>Mile</label>
        <input id='mile' placeholder='mile' type='number' value={flipped ? amount : (amount/1.60934).toFixed(6) } disabled={!flipped} onChange={onChangeAmount}></input>
      </div>
      <button onClick={() => {reset()}}>Reset</button>
      <button onClick={() => {onClickFlipped()}}>Flipped</button>
    </div>
    )
  }