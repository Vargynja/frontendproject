import React, { useState } from 'react';
import './App.css';
import LintuList from './components/LintuList'


function App() {
  const linnut = useState([]);
  return (
    <div className="App">
      <LintuList />
    </div>
  );
}

export default App;
