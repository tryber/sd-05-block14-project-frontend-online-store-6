import React from 'react';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  render() {
    const { products } = this.state;
    /* criando If/Else para mudar mensagem conforme conteudo no carrinho
    esteja cheio ou vazio. */
    if (products.length === 0)
      return (
        <div className="empty-cart" data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      );
    return <div>Carrinho de Compras</div>;
  }
}

export default ShoppingCart;
