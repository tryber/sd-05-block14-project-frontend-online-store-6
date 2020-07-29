import React from 'react';

class FinishPurchase extends React.Component {
  render() {
    const {
      checkoutfullname,
      checkoutemail,
      checkoutcpf,
      checkoutphone,
      checkoutcep,
      checkoutaddress,
    } = this.props;
    return (
      <form>
        <input type="text" data-testid={checkoutfullname} placeholder="Nome Completo" />
        <input type="text" data-testid={checkoutemail} placeholder="Email: exemplo@exemplo.com" />
        <input type="text" data-testid={checkoutcpf} placeholder="CPF" />
        <input type="text" data-testid={checkoutphone} placeholder="Telefone (XX) XXXX-XXXX" />
        <input type="text" data-testid={checkoutcep} placeholder="CEP" />
        <input type="text" data-testid={checkoutaddress} placeholder="Endereço" />
      </form>
    );
  }
}

export default FinishPurchase;
