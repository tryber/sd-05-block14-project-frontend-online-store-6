function saveStorage(meuDepositorio) {
  localStorage.setItem('depositório', JSON.stringify(meuDepositorio));
}

function loadStorage() {
  return JSON.parse(localStorage.getItem('depositório') || '[]');
}

export default {
  create: () => {
    if (loadStorage() === 0) saveStorage([]);
  },
  getItems: () => loadStorage(),
  addItem: (product) => {
    const meuDepositorio = loadStorage();
    const item = {
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
      amount: 1,
    };
    let exists = false;
    meuDepositorio
      .forEach((element) => {
        exists = (item.id === element.id);
        if (exists) element.amount += 1;
      });
    if (!exists) meuDepositorio.push(item);
    saveStorage(meuDepositorio);
  },
  removeItem: (id, qtd = 1) => {
    const meuDepositorio = loadStorage();
    meuDepositorio
      .forEach((element) => {
        if (element.id === id && element.amount > 0) element.amount -= qtd;
      });
    saveStorage(meuDepositorio);
  },
  deleteItem: (id) => {
    const meuDepositorio = loadStorage();
    const newDepositorio = meuDepositorio.filter(({ id: unique }) => (unique !== id));
    saveStorage(newDepositorio);
  },
  removeAll: () => {
    saveStorage([]);
  },
};
