
let allProducts = [
  {
    name: 'Porcelain Cup',
    price: 8.50,
    inventory: 50
  },
  {
    name: 'Hydroflask',
    price: 40,
    inventory: 30
  },
  {
    name: 'Plastic Cup',
    price: 4,
    inventory: 20
  }
];

function getAll() {
  return allProducts;
}

function makeProduct(name, price, inventory) {
  // if (name.length < 1 && price.length < 1 && inventory.length < 1) {
  if (name.length > 1) {
    let product = { name: name, price: price, inventory: inventory };
    allProducts.push(product);
    //console.log('this allprod', allProducts);
    return product;
  } else {
    //res.send('/new');
    return false;
  }
}


module.exports = {

  getAll: getAll,
  makeProduct: makeProduct
}