import './App.css';
import React from 'react'
import User from "./Component/User/User";

function App() {
  return (
    <div className="App">
     <h1>App Component</h1>
     <User data={{name:'Narayan Singh',age:'21'}}/>
    </div>
  ); 
}

export default App;
