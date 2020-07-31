import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import CartSelection from '../services/cart';
import Product from '../components/Product';
/* import FinishPurchase from '../pages/FinishPurchase'; */

function emptyCartElement() {
  return (
    <div className="empty-cart" data-testid="shopping-cart-empty-message">
      Seu carrinho está vazio
    </div>
  );
}

class ShoppingCart extends React.Component {
  render() {
    const products = CartSelection.getItems();
    if (products.length === 0) return emptyCartElement();
    return (
      <div className="product-list">
        <Product />
        <Router>
          <Link to="FinishPurchase" data-testid="checkout-products">
            <button type="button">Finalizar Compra</button>
          </Link>
          <Switch>
            <Route path="/FinishPurchase" component={FinishPurchase} />
          </Switch>
        </Router>
        <button type="button" onClick={() => { CartSelection.removeAll(); }}>
          Limpar carrinho
        </button>
      </div>
    );
  }
}

export default ShoppingCart;
