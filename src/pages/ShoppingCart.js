import React from 'react';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.fillCart = this.fillCart.bind(this);
  }

  componentDidMount() {
    const cart = JSON.parse(localStorage.getItem('depositório') || '[]');
    if (cart.length === 0) localStorage.setItem('depositório', '[]');
    this.fillCart(cart);
  }

  fillCart(products) {
    this.setState({ products });
  }

  render() {
    const { products } = this.state;
    /* criando If/Else para mudar mensagem conforme conteudo no carrinho
    esteja cheio ou vazio. */
    if (products.length === 0) {
      return (
        <div className="empty-cart" data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      );
    }
    return (
      <div className="product-list">
        {
          products.map((product) => (
            <div key={product.id} className="card" data-testid="product-add-to-cart">
              <div className="card-header" data-testid="shopping-cart-product-name">
                {product.title}
              </div>
              <div className="card-body">
                <img src={product.thumbnail} alt="Product" />
                <p>{`R$ ${Number(product.price).toFixed(2)}`}</p>
              </div>
              <div data-testid="shopping-cart-product-quantity">
                10
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default ShoppingCart;
