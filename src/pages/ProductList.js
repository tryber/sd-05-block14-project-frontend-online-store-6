import React from 'react';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.productsElement = this.productsElement.bind(this);
  }

  productsElement() {
    const { list } = this.props;
    if (list.length > 0) {
      return list.map((product) => (
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
      //  implementando espaço de busca
      <div>
        <div data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
        <div className="product-list">
          {this.productsElement()}
        </div>
      </div>
    );
  }
}

export default ProductList;
