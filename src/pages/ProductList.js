import React from 'react';
import CartSelection from '../services/cart';
import ProductDetails from './ProductDetails';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: null };
    this.productsElement = this.productsElement.bind(this);
    this.openDetails = this.openDetails.bind(this);
  }

  componentDidMount() {
    CartSelection.create();
  }

  openDetails(detail) {
    this.setState({ product: detail });
  }

  productsElement() {
    const { list } = this.props;
    if (list.length > 0) {
      return list.map((product) => (
        <div key={product.id} className="card" data-testid="product">
          <div className="card-header">{product.title}</div>
          <a
            href="index.js:1"
            className="card-body"
            data-testid="product-detail-link"
            onClick={() => {
              this.openDetails(product);
            }}
          >
            <img src={product.thumbnail} alt="Product" />
            <p>{`R$ ${Number(product.price).toFixed(2)}`}</p>
          </a>
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={() => { CartSelection.addItem(product); }}
          >
            Add to Cart
          </button>
        </div>
      ));
    }
    return <div>Você ainda não realizou uma busca</div>;
  }

  render() {
    const { product } = this.state;
    if (product) return <ProductDetails product={product} />;
    return (
      <div>
        <div data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
        <div className="product-list">{this.productsElement()}</div>
      </div>
    );
  }
}

export default ProductList;
