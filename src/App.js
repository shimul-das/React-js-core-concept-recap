import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Dataload></Dataload>
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

function Dataload(){
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>setPosts(data))
    // .then(data=>console.log(data))
  },[])
  return(
    <div>
<h1>Posts:{posts.length}</h1>
{
  posts.map(post=><Post title={post.title} body={post.body}></Post>)
}
    </div>
  )
}
function Post(props){
  return(
    <div className='post'>
      <h2>Title:{props.title}</h2>
      <p>Title:{props.body}</p>
    </div>
  )
}
export default App;
