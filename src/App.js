import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Photos></Photos>
      </header>
    </div>
  );
}
function Photos(){
  const [photos, setPhoto] = useState([]);
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => res.json())
    .then(data => setPhoto(data))
  }, [])
  return (
    <div>
      <h1>photo Info: {photos.length}</h1>
      <ul>
        {
          photos.map(photoInfo => <li>{photos.id}</li>)
        }
      </ul>
    </div>
  )
}


export default App;
