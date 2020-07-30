import React from 'react';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    const cart = JSON.parse(localStorage.getItem('depositório') || '[]');
    if (cart.length === 0) localStorage.setItem('depositório', '[]');
    this.setState({ products: cart });
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

/* Adicione o atributo data-testid com o valor product-add-to-cart nos
elementos que executam a ação de adicionar os produtos ao carrinho
de compras.

Desenvolva algo da forma simples: um elemento adiciona um produto.

Adicione o atributo data-testid com o valor shopping-cart-product-name
no elemento que possui o nome do produto na tela do carrinho de compras.
Você deve adicionar esse atributo para todos os produtos.

Adicione o atributo data-testid com o valor 
shopping-cart-product-quantity no elemento que possui a quantidade
do produto na tela do carrinho de compras. Você deve adicionar esse 
atributo para todos os produtos. */
