const endpoint = {
  categories: 'https://api.mercadolibre.com/sites/MLB/categories',
  productsCat: 'https://api.mercadolibre.com/sites/MLB/search?category=',
  productsQuery: 'https://api.mercadolibre.com/sites/MLB/search?q=',
}

// Busca de Categories já declarada dentro de GetCategories
export async function getCategories() {
  const apiUrl = endpoint.categories;
  const fetchResult = fetch(apiUrl).then((response) => response.json());
  return fetchResult;
}

// Busca de id e query declaradas dentro da função
export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let apiUrl;
  if(categoryId) apiUrl = `${endpoint.productsCat}${categoryId}`;
  else if(query) apiUrl = `${endpoint.productsQuery}${query}`;
  else apiUrl = `${endpoint.productsCat}${categoryId}_ID&q=${query}`;
  return fetch(apiUrl)
    .then((response) => response.json())
    .catch(() => false);
}
