import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import ProductList from './ProductList';
import Categories from './components/Categories';
import ShoppingCart from './pages/ShoppingCart';
import svg from './img/shopping-cart.svg';

function App() {
  return (
    <div className="app">
      {/* Criando link de acesso as paginas */}
      <Router>
        <div className="main-page">
          {/* Link de acesso ao ShoppingCart que funciona como Button */}
          <Link
            className="cart-button"
            data-testid="shopping-cart-button"
            to="ShoppingCart"
          >
            <img className="cart-img" src={svg} alt="shop cart" />
          </Link>
        </div>
        {/* Switch indica para qual componente/página enviar o Link */}
        <Switch>
          <Route path="/" component={ProductList} />
          <Route path="/ShoppingCart" component={ShoppingCart} />
        </Switch>
      </Router>
      <form className="categories">
        <p>Categorias:</p>
        <Categories />
      </form>
    </div>
  );
}

export default App;
