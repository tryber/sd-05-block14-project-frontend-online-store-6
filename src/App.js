import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import * as Api from './services/api';

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
      currentQuery: null,
      selectedCategory: null,
    };
    this.mountProductList = this.mountProductList.bind(this);
    this.changeCategoriesAndQueries = this.changeCategoriesAndQueries.bind(this);
    this.elementProductList = this.elementProductList.bind(this);
  }

  mountProductList() {
    const { selectedCategory, currentQuery } = this.state;
    Api.getProductsFromCategoryAndQuery(selectedCategory, currentQuery).then(
      (products) => {
        this.setState({ productList: products.results });
      },
    );
  }

  changeCategoriesAndQueries(category, query) {
    const { currentQuery, selectedCategory } = this.state;
    this.setState({
      currentQuery: query || currentQuery,
      selectedCategory: category || selectedCategory,
    });
    this.mountProductList();
  }

  elementProductList(attr) {
    const { productList } = this.state;
    return <ProductList {...attr} list={productList} />;
  }

  render() {
    const { selectedCategory } = this.state;
    return (
      <div className="app">
        <Router>
          <Categories onChangeCategory={this.changeCategoriesAndQueries} />
          <div className="page-content">
            <div className="main-page">
              <SearchBar
                categoryFilter={selectedCategory}
                onSearch={this.changeCategoriesAndQueries}
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
              <Route exact path="/" render={this.elementProductList} />
              <Route path="/ShoppingCart" component={ShoppingCart} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
