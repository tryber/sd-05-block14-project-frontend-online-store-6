import React from 'react';
import CartSelection from '../services/cart';

class ProductDetails extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div className="main-page">
        <h1 data-testid="product-detail-name">{product.title}</h1>
        <p>
          <img src={product.thumbnail} alt={product.title} />
          {`R$${product.price}`}
        </p>
        <button
          data-testid="product-detail-add-to-cart"
          onClick={() => { CartSelection.addItem(product); }}
        >
            Add to cart
        </button>
        <input type="textarea" data-testid="product-detail-evaluation" />
      </div>
    );
  }
}

export default ProductDetails;
