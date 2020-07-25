import React from 'react';

class ProductList extends React.Component {
  render() {
    return (
      <div  data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        <ul>
        </ul>
      </div>
    );
  }
}

export default ProductList;