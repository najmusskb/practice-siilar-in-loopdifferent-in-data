import logo from './logo.svg';
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
backgroundColor:'yellow',
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


// similar in look ,,different in data
