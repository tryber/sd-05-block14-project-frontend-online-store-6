import React from 'react';
import CartSelection from '../services/cart';

class Product extends React.Component {
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
    return (
      <div className="product-list">
        {
          products.map((product) => (
            <div key={product.id} className="card" data-testid="product-add-to-cart">
              <div className="card-header" data-testid="shopping-cart-product-name">
                {product.title}
              </div>
              <div className="card-body">
                <img src={product.thumbnail} alt="Product" />
                <p>{`R$ ${Number(product.price).toFixed(2)}`}</p>
              </div>
              <div data-testid="shopping-cart-product-quantity">
                {product.amount}
              </div>
              <button data-testid="product-increase-quantity" onClick={()=>{CartSelection.addItem(product)}}>Add</button>
              <button data-testid="product-decrease-quantity" onClick={()=>{CartSelection.removeItem(product.amount)}}>Remove</button>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Product;
