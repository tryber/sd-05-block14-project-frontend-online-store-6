import React from 'react';
import './img/shopping-cart.svg'
import ShoppingCart from './components/ShoppingCart';

class ProductList extends React.Component {
  render() {
    return(
      <div data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
      </div>
      <div>
        <button data-testid = 'shopping-cart-button'>
          <img src={shopping-cart} alt='shopping cart'/>
        </button>
      </div>
      );
  }
}

export default ProductList;