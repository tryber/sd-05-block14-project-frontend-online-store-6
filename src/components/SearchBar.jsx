import React from 'react';
import SearchIcon from '../img/searching-icon.svg';
import * as Api from '../services/api';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      results: {},
      loading: false,
      message: '',
    };
    this.timer = {};
  }
  //  função para mudar paginas de busca
  handleOnInputChange = (event) => {
    const query = event.target.value;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      Api.getProductsFromCategoryAndQuery().then((response) => {
        console.log(response); /*faz a busca mas quando tento definir query 
        ele ou retorna como undefined com query comentado ou quando tento settar ele
        para de aparecer o input de text na barra e n faz nada*/
      });
    }, 500);
  };

  render() {
    const { query } = this.state;
    return (
      <div className="container">
        {/*Search Input*/}
        <label className="search-label" htmlFor="search-input">
          <input
            type="text"
            name="query"
            // value={query}
            id="search-input"
            placeholder="Search Products..."
            onChange={(event) => {
              this.handleOnInputChange(event);
            }}
          />
          <img className="search-icon" src={SearchIcon} alt="Search Icon" />
        </label>
      </div>
    );
  }
}

export default SearchBar;
