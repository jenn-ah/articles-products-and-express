const express = require('express');
const router = express.Router();
const productsDb = require('../db/products');

router.route('/')
  .get((req, res) => {
    res.send(`This is products landing`);
    //res.render('./index', *products*);
  })
  //.post(productsDb.makeProduct())

  .post((req, res) => {

    let name = req.body.name;
    let price = req.body.price;
    let inventory = req.body.inventory;
    let prodDbMake = productsDb.makeProduct(name, price, inventory);
    //res.redirect('/');
    //console.log(prodDbMake);
    //res.render()
  })
  .put((req, res) => {

  })
  .delete((req, res) => {

  });

router.get('/new', (req, res) => {
  //res.send('req body', req.body);
  //console.log('req', req.body);
  res.render('form');
});

module.exports = router;