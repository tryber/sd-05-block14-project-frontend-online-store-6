const cartSelection = {
  create: () => {
    const cart = JSON.parse(localStorage.getItem('depositório') || '[]');
    if (cart.length === 0) {
      localStorage.setItem('depositório', '[]');
    }
  },
  getItems: () => (
    JSON.parse(localStorage.getItem('depositório') || '[]')
  ),
  addItem: (product) => {
    const item = {
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
    };
    const meuDepositorio = JSON.parse(localStorage.getItem('depositório') || '[]');
    meuDepositorio.push(item);
    localStorage.setItem('depositório', JSON.stringify(meuDepositorio));
  },
  removeItem: (productId) => {
    const meuDepositorio = JSON.parse(localStorage.getItem('depositório'));
    const newDepositorio = meuDepositorio.filter(({ id }) => (id !== productId));
    localStorage.setItem('depositório', JSON.stringify(newDepositorio));
  },
  removeAll: () => {
    localStorage.setItem('depositório', '[]');
  },
};

export default cartSelection;
