import React from 'react';
import './App.css';

import Categories from './components/Categories';

function App() {
  return (
    <div className="app">
      <form className="categories">
        <p>Categorias:</p>
        <Categories />
      </form>
    </div>
  );
}

export default App;
