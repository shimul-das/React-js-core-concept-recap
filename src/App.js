import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <District name="Noyakhli" speciality="Vibhag"></District>
      <District name="Bhola" speciality="Nature of beauty"></District>
      <District name="Shylet" speciality="Nature of hill"></District>
      <District name="Cox's Bazar" speciality="Nature of ochen"></District>
    </div>
  );
}
const containerStyle={
  backgroundColor:"lightblue",
  margin:'20px',
  padding:'20px',
  borderRadious:"20px"

}

function District(props){
  const [power,setPower] = useState(1);
  const boostPower=()=>{
    const newPower=power*2;
    setPower(newPower)
  }
  return(
    <div style={containerStyle}>
      <h2>Name:{props.name}</h2>
      <h4>Speciality:{props.speciality}</h4>
      <h4>Powe: {power}</h4>
      <button onClick={boostPower}>Boost The powe</button>
    </div>
  )
}
export default App;
