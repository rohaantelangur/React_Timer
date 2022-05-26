import React, {useState } from 'react';
import './App.css';
import  Timer  from './components/Timer';

function App() {
  const [starttime, setstarttime] = useState(10)
  const [endtime, setendtime] = useState(50)

  return (
    <div className="App">
    <Timer starttime={starttime} endtime={endtime} />
    </div>
  );
}

export default App;
