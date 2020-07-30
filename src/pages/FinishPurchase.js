import React from 'react';
import ShoppingCart from './ShoppingCart';

class FinishPurchase extends React.Component {
  render() {
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
}

export default FinishPurchase;
