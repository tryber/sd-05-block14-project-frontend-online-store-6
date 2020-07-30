import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ProductList from './pages/ProductList';
import Categories from './components/Categories';
import ShoppingCart from './pages/ShoppingCart';
import svg from './img/shopping-cart.svg';
import FinishPurchase from './pages/FinishPurchase';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  constructor() {
    super();
    this.state = { productList: [] };
    this.mountProductList = this.mountProductList.bind(this);
  }

  mountProductList(products) {
    this.setState({ productList: products });
  }

  /* Substituir a função abaixo por um componente ou page */
  productsElement() {
    const { productList } = this.state;
    if (productList.length > 0) {
      return productList.map((product) => (
        <div key={product.id} className="card" data-testid="product">
          <div className="card-header">{ product.title }</div>
          <div className="card-body">
            <img src={product.thumbnail} alt="Product" />
            <p>{`R$ ${Number(product.price).toFixed(2)}`}</p>
          </div>
        </div>
      ));
    }
    return (<div>Você ainda não realizou uma busca</div>);
  }

  render() {
    return (
      <div className="app">
        <Router>
          <form className="categories">
            <p>Categorias:</p>
            <Categories />
          </form>
          <div className="page-content">
            <div className="main-page">
              {/* O SearchBar agora tem um prop que recebe o callback dos resultados */}
              <SearchBar onSearch={(res) => { this.mountProductList(res); }} />
              <Link
                className="cart-button"
                data-testid="shopping-cart-button"
                to="ShoppingCart"
              >
                <img className="cart-img" src={svg} alt="shop cart" />
              </Link>
            </div>
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route path="/ShoppingCart" component={ShoppingCart} />
              <Route path="/pages/FinishPurchase" component={FinishPurchase} />
            </Switch>

            {/* Os resultados são impressos dentro dessa div */}
            <div className="product-list">
              {this.productsElement()}
            </div>

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
