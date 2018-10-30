const express = require('express');
const router = express.Router();
const productsDb = require('../db/products');

router.route('/')
  .get((req, res) => {
    let allProd = productsDb.getAll();
    //console.log('allprod', allProd);
    //res.send(allProd);
    res.render('index', { allProd });
  })
  //.post(productsDb.makeProduct())

  .post((req, res) => {

    let name = req.body.name;
    let price = req.body.price;
    let inventory = req.body.inventory;
    let prodDbMake = productsDb.makeProduct(name, price, inventory);
    res.redirect('/products');

  })
  .put((req, res) => {

  })
  .delete((req, res) => {

  });

router.get('/new', (req, res) => {
  res.render('form');
});

router.get('/:id', (req, res) => {
  let idVar = req.params.id;
  let idObj = productsDb.getById(idVar);
  res.render('product', idObj);
});

module.exports = router;