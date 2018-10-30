
let allProducts = [
  {
    name: 'Porcelain Cup',
    price: 8.50,
    inventory: 50,
    id: 1
  },
  {
    name: 'Hydroflask',
    price: 40,
    inventory: 30,
    id: 2
  },
  {
    name: 'Plastic Cup',
    price: 4,
    inventory: 20,
    id: 3
  }
];

let prodId = 4;

function getById(id) {
  let result = allProducts.filter((product) => {
    return product.id === parseInt(id);
  })[0];
  return result;
}

function getAll() {
  return allProducts;
}

function makeProduct(name, price, inventory) {

  if (name.length > 1) {
    let product = { name: name, price: price, inventory: inventory, id: prodId++ };
    allProducts.push(product);
    console.log(allProducts);
    return product;
  } else {
    //res.send('/new');
    return false;
  }
}


module.exports = {

  getAll: getAll,
  makeProduct: makeProduct,
  getById: getById
}