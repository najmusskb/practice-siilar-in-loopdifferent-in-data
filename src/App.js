// similar in look ,,different in data

// 1.-----------------------------------------------------------------------------------------------

/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Distric name="Nowakhali" Special="vibag"></Distric>
      <Distric name="b-ariya" Special="war" ></Distric>
      <Distric name="cumilla" Special='moynamoti' ></Distric>
    </div>
    
  );
}


function Distric(props){

const districSyle={
backgroundColor:'green',
margin:'200px',
borderRadious:'30px'
}
  return(
    <div style={districSyle}>
      <h2>Name:{props.name}</h2>
      <p>Specialty:{props.Special}</p>
    </div>
  )
  
}

export default App;

 */
//2 -----------------------------------------------------------------------------------------------------------

// user kichu ta increass korbe 


import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Distric name="Nowakhali" Special="vibag"></Distric>
      <Distric name="B-Bariya" Special="war" ></Distric>
      <Distric name="Comilla" Special='moynamoti' ></Distric>
    </div>
    
  );
}


function Distric(props){

  // state 1 (state declare kora)
const [power, setPower]=useState(1);

// state -03 (event handlaer set)
const boostPower =()=> {
  const newPower=power*2;
  setPower(newPower);

}

const districSyle={
backgroundColor:'skyblue',
margin:'300px',
borderRadious:'30px',
padding:'20px'
}

// state-02(ui te dekhano)
  return(
    <div style={districSyle}>
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.Special}</p>
      <p>Power: {power} </p>

    {/* state-04  (button er sathe event handler ke add kore fela) */}
      <button onClick={boostPower}>Boost The Power : </button>
    </div>
  )
  
}

export default App;


