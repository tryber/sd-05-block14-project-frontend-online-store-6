import React from 'react';
import CartSelection from '../services/cart';

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
        {products.map((product) => (
          <div
            key={product.id}
            className="card"
            data-testid="product-add-to-cart"
          >
            <div
              className="card-header"
              data-testid="shopping-cart-product-name"
            >
              {product.title}
            </div>
            <div className="card-body">
              <img src={product.thumbnail} alt="Product" />
              <p>{`R$ ${Number(product.price).toFixed(2)}`}</p>
            </div>
            <div data-testid="shopping-cart-product-quantity">
              {product.amount}
            </div>
          </div>
        ))}
        <button
          onClick={() => {
            CartSelection.removeAll();
          }}
        >
          Limpar carrinho
        </button>
      </div>
    );
  }
}

export default ShoppingCart;
