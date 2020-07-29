import React from 'react';

class FinishPurchase extends React.Component {
  render() {
    const {
      checkout-fullname,
      checkout-email,
      checkout-cpf,
      checkout-phone,
      checkout-cep,
      checkout-address,
    } = this.props;
    return(
      <form>
        <input type="text" data-testid={checkout-fullname} placeholder="Nome Completo"/>
        <input type="text" data-testid={checkout-email} placeholder="Email: exemplo@exemplo.com"/>
        <input type="number" data-testid={checkout-cpf} placeholder="CPF"/>
        <input type="number" data-testid={checkout-cep} placeholder="CEP"/>
        <input type="text" data-testid={checkout-address} placeholder="Endereço"/>
      </form>
    );
  }
}

export default FinishPurchase;