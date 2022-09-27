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
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPost></LoadPost>
      <Distric name="Nowakhali" Special="vibag"></Distric>
      <Distric name="B-Bariya" Special="war" ></Distric>
      <Distric name="Comilla" Special='moynamoti' ></Distric>
    </div>
    
  );
}



//state -05  for data load-----------------------------------------
function LoadPost(props){
  const [posts, setPost]=useState([]); //step-1

  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    // .then(data=>console.log(data))
    .then(data =>setPost(data))
  },[]) // second step-2

  return(
    <div>
      <h1>Post:{posts.length} </h1>

      {
        posts.map(post=><Post title={post.title} body={post.body}></Post>) //set atribute
      }
    </div>
  )
}
function Post(props){

  return(

    <div className='post'>
      <h2>Title: {props.title} </h2>
      <p>Body :{props.body}</p>
    </div>
  )
}

// ---------------------------------------------------------------------------------------------

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


