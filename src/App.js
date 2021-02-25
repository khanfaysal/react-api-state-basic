import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const studentArrayName = ['Faysal', 'Suman', 'Lekhon', 'Rakib'];
  const studentArrayAge = ['10', '11','12','13']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <Students name = {studentArrayName[3]} roll = '10'></Students>
        <Students name = {studentArrayName[2]} roll = '11'></Students>
        <Students name = {studentArrayName[1]} roll = '12'></Students>
        <Students name = {studentArrayName[0]} roll = ''></Students>
        
        <Photos></Photos>
        <Photos></Photos>
        <Photos></Photos>
        <Photos></Photos>
      </header>
    </div>
  );
}
function Students(props){
console.log(props)
  const divStyle ={
    border: '1px solid black',
    margin: '5px',
    padding: '10px',
    backgroundColor: 'red',
    boxShadow: '3px 5px 3px tomato'  

  }
  return (
    <div style = {divStyle}>
      <h3>students : {props.name}</h3>
      <h5>roll: {props.roll || 5}</h5>
    </div>
  )
}
function Photos(){
  const [photos, setPhoto] = useState([]);
  const specificItem = photos.slice(0,9);
  const photosCss = {
    border: '2px solid salmon'
  }
  const liStyle = {
    border: '1px solid white',
    backgroundColor: 'tomato'
  }
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => res.json())
    .then(data => setPhoto(data))
  }, [])
  return (
    <div style = {photosCss}>
      <h1>photo Info: {photos.length}</h1>
      <ul>
        
        {
          //  photos.map(photoInfo => <li>{photoInfo.id +' '+  photoInfo.title}</li>)
           specificItem.map(photoInfo => <li style = {liStyle}>{photoInfo.id +' '+  photoInfo.title}</li>)
        }
      </ul>

    </div>
  )
}


export default App;
