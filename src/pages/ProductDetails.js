import React from 'react';

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
      </div>
    );
  }
}

export default ProductDetails;
