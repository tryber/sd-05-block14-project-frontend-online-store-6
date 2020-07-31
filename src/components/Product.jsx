import React from 'react';
import CartSelection from '../services/cart';

function Button(props) {
  const { testid, event, children } = props;
  return (
    <button
      type="button"
      data-testid={testid}
      onClick={event}
    >
      {children}
    </button>
  );
}

function CardBody(props) {
  const { product } = props;
  return (
    <div className="card-body">
      <img src={product.thumbnail} alt="Product" />
      <p>{`R$ ${Number(product.price * product.amount).toFixed(2)}`}</p>
      <div data-testid="shopping-cart-product-quantity">
        {product.amount}
      </div>
    </div>
  );
}

class Product extends React.Component {
  render() {
    const products = CartSelection.getItems();
    return (
      <div className="product-list">
        {
          products.map((product) => (
            <div
              key={`${product.id}${Math.random()}`}
              className="card"
              data-testid="product-add-to-cart"
            >
              <div className="card-header" data-testid="shopping-cart-product-name">
                {product.title}
              </div>
              <CardBody product={product} />
              <div className="card-control">
                <Button
                  testid="product-increase-quantity"
                  event={() => {
                    CartSelection.addItem(product);
                    this.forceUpdate();
                  }}
                >
                  Add
                </Button>
                <Button
                  testid="product-decrease-quantity"
                  event={() => {
                    if (product.amount > 1) CartSelection.removeItem(product.id);
                    else CartSelection.deleteItem(product.id);
                    this.forceUpdate();
                  }}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Product;
