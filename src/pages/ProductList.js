import React from 'react';
import ProductDetails from './ProductDetails';

function addProductToCart(product) {
  const item = {
    id: product.id,
    title: product.title,
    price: product.price,
    thumbnail: product.thumbnail,
  };

  const meuDepositorio = JSON.parse(localStorage.getItem('depositório'));
  meuDepositorio.push(item);
  localStorage.setItem('depositório', JSON.stringify(meuDepositorio));
}

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: null };
    this.productsElement = this.productsElement.bind(this);
    this.openDetails = this.openDetails.bind(this);
  }

  componentDidMount() {
    const cart = JSON.parse(localStorage.getItem('depositório') || '[]');
    if (cart.length === 0) {
      localStorage.setItem('depositório', '[]');
    }
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
            onClick={() => { addProductToCart(product); }}
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
      //  implementando espaço de busca
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
