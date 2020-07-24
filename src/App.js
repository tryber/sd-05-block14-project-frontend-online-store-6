import React from 'react';
import { getCategories } from './services/api';
import './App.css';

function App() {
  getCategories().then((res) => {
    console.log(res);
  })
  return <div className="App">CODECLIMATE</div>;
}

export default App;
