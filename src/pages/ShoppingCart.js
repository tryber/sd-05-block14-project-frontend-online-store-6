import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import CartSelection from '../services/cart';
import Product from '../components/Product';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.fillCart = this.fillCart.bind(this);
  }

  componentDidMount() {
    this.fillCart(CartSelection.getItems());
  }

  fillCart(products) {
    this.setState({ products });
  }

  render() {
    const { products } = this.state;
    if (products.length === 0) {
      return (
        <div className="empty-cart" data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      );
    }
    return (
      <div className="product-list">
        <Product />
        <Router>
          <Link to="/pages/FinishPurchase" data-testid="checkout-products">
            <button>Finalizar Compra</button>
          </Link>
        </Router>
        <button onClick={() => { CartSelection.removeAll(); }}>Limpar carrinho</button>
      </div>
    );
  }
}

export default ShoppingCart;
