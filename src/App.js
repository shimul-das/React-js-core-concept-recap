import logo from './logo.svg';
import './App.css';

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
  return(
    <div style={containerStyle}>
      <h2>Name:{props.name}</h2>
      <h4>Speciality:{props.speciality}</h4>
    </div>
  )
}
export default App;
