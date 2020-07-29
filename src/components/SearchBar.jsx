import React from 'react';
import SearchIcon from '../img/searching-icon.svg';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: null };
    this.timer = {};
    this.handleOnInputChange = this.handleOnInputChange.bind(this);
  }

  handleOnInputChange(event) {
    const query = event.target.value;
    clearTimeout(this.timer);
    this.setState({ query });
    this.timer = setTimeout(() => {
      this.startSearch();
    },
    500);
  }

  startSearch() {
    const { onSearch } = this.props;
    const { query } = this.state;
    onSearch(null, query);
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
          <button
            type="button"
            className="search-icon"
            onClick={() => { this.startSearch(); }}
          >
            <img
              src={SearchIcon}
              alt="Search Icon"
              data-testid="query-button"
            />
          </button>
        </label>
      </div>
    );
  }
}

export default SearchBar;
