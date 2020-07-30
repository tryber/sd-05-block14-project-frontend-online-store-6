import React from 'react';
import SearchIcon from '../img/searching-icon.svg';
import * as Api from '../services/api';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
    this.timer = {};
    this.handleOnInputChange = this.handleOnInputChange.bind(this);
  }

  handleOnInputChange(event) {
    const query = event.target.value;
    const { onSearch } = this.props;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      Api
        /* Você esqueceu de passar os parâmentros aqui!
        Por isso tava dando erro */
        .getProductsFromCategoryAndQuery(false, query)
        .then((response) => {
          onSearch(response.results);
        });
    }, 500);
  }

  render() {
    return (
      <div className="container">
        <label className="search-label" htmlFor="search-input">
          <input
            data-testid="query-input"
            type="text"
            name="query"
            id="search-input"
            placeholder="Search Products..."
            onChange={(event) => {
              this.handleOnInputChange(event);
            }}
          />
          <img
            className="search-icon"
            src={SearchIcon}
            alt="Search Icon"
            data-testid="query-button"
          />
        </label>
      </div>
    );
  }
}

export default SearchBar;
