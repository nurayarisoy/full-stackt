import { useState } from 'react';
import './App.css';
import TestComponent from './TestComponent';

function App() {
const [isVisible, setIsvisible] = useState(true)

  return (
    <div className="App">
      <h1>CLARUSWAY</h1>
      {isVisible ? 
      <TestComponent surname= "green"/>
      : null
    }
      <button onClick={() => setIsvisible(!isVisible) } >unmount</button>
    </div>
  );
}

export default App;
