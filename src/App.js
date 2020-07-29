import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ProductList from './pages/ProductList';
import Categories from './components/Categories';
import ShoppingCart from './pages/ShoppingCart';
import svg from './img/shopping-cart.svg';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      selectedCategory: null,
    };
    this.mountProductList = this.mountProductList.bind(this);
    this.changeCategories = this.changeCategories.bind(this);
  }

  mountProductList(products) {
    this.setState({ productList: products });
  }

  changeCategories(category) {
    this.setState({ selectedCategory: category });
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
    const { selectedCategory } = this.state;
    return (
      <div className="app">
        <Router>
          <form className="categories">
            <p>Categorias:</p>
            <Categories onChangeCategory={this.changeCategories}/>
          </form>
          <div className="page-content">
            <div className="main-page">
              <SearchBar
                categoryFilter={selectedCategory}
                onSearch={(res) => { this.mountProductList(res); }}
              />
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
