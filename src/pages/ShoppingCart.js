import React from 'react';
import CartSelection from '../services/cart';
import Product from '../components/Product';

function emptyCartElement() {
  return (
    <div className="empty-cart" data-testid="shopping-cart-empty-message">
      Seu carrinho está vazio
    </div>
  );
}

function finishPurchaseElement() {
  return (
    <div>
      <ShoppingCart />
      <form>
        <input type="text" data-testid="checkout-fullname" placeholder="Nome Completo" />
        <input type="text" data-testid="checkout-email" placeholder="Email: exemplo@exem.com" />
        <input type="text" data-testid="checkout-cpf" placeholder="CPF" />
        <input type="text" data-testid="checkout-phone" placeholder="Telefone (XX) XXXX-XXXX" />
        <input type="text" data-testid="checkout-cep" placeholder="CEP" />
        <input type="text" data-testid="checkout-address" placeholder="Endereço" />
      </form>
    </div>
  );
}

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = { isFinished: false };
  }

  render() {
    const products = CartSelection.getItems();
    const { isFinished } = this.state;
    if (isFinished) return finishPurchaseElement();
    if (products.length === 0) return emptyCartElement();
    return (
      <div className="product-list">
        <Product />
        <div>
          <button
            data-testid="checkout-products"
            type="button"
            onClick={() => { this.setState({ isFinished: true }); }}
          >
            Finalizar Compra
          </button>
          <button type="button" onClick={() => { CartSelection.removeAll(); }}>
            Limpar carrinho
          </button>
        </div>

      </div>
    );
  }
}

export default ShoppingCart;
