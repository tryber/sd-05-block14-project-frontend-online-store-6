class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
      this.state = { products: [] };
    }
  
    render() {
      const { products } = this.state;
      if (products.length === 0) return <CarrinhoVazinho />;
      return <div>Carrinho de Compras</div>;
    }
  }
  
  export default ShoppingCart;