import { fetchUrl } from 'fetch';

const apiUrl = {
  // Busca as categorias
  categories: 'https://api.mercadolibre.com/sites/MLB/categories',
  // Busca pelo ID de uma categoria
  catId: 'https://api.mercadolibre.com/sites/MLB/search?category=',
  // Busca pelo Termo
  query: 'https://api.mercadolibre.com/sites/MLB/search?q=',
};

// Busca as categorias
async function getCategories() {
  return new Promise((resolved, rejected) => {
    fetchUrl(apiUrl.categories, async (err, meta, data) => {
      if (err) rejected(err);
      resolved(JSON.parse(data.toString()));
    });
  });
}

/* Pesquisa por termo e categoria */
async function getProductsFromCategoryAndQuery(categoryId, query) {
  const q = `${apiUrl.catId}${categoryId}&q=${query}`;
  return new Promise((resolved, rejected) => {
    fetchUrl(q, async (err, meta, data) => {
      if (err) rejected(err);
      resolved(JSON.parse(data.toString()));
    });
  });
}

/* Pesquisa por categoria */
async function getProductsFromCategory(categoryId) {
  const q = `${apiUrl.catId}${categoryId}`;
  return new Promise((resolved, rejected) => {
    fetchUrl(q, async (err, meta, data) => {
      if (err) rejected(err);
      resolved(JSON.parse(data.toString()));
    });
  });
}

/* pesquisa por termo */
async function getProductsFromCategory(query) {
  const q = `${apiUrl.query}${query}`;
  return new Promise((resolved, rejected) => {
    fetchUrl(q, async (err, meta, data) => {
      if (err) rejected(err);
      resolved(JSON.parse(data.toString()));
    });
  });
}

export {
  getCategories,
  getProductsFromCategoryAndQuery,
  getProductsFromCategory,
};
