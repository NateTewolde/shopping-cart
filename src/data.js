async function getAllProducts() {
  const response = await fetch(`https://fakestoreapi.com/products`, {
    mode: "cors",
  });

  return await response.json();
}

async function getAllCategories() {
  const response = await fetch("https://fakestoreapi.com/products/categories", {
    mode: "cors",
  });

  return await response.json();
}

export { getAllProducts, getAllCategories };
