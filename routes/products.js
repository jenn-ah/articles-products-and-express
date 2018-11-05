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


router.put('/:id', (req, res) => {
  let idVar = req.params.id;
  let grabName = req.body.name;
  let grabPrice = req.body.price;
  let grabInventory = req.body.inventory;
  let testingPut = productsDb.editById(idVar, grabName, grabPrice, grabInventory);
  //console.log('grabname', grabName);
  //let grabId = productsDb.getById(idVar);
  //console.log('grabbing id', grabId);
  //res.render('editproduct', );

  //console.log('testing put', testingPut);
});

router.get('/:id/edit', (req, res) => {
  let idVar = req.params.id;
  let idObj = productsDb.getById(idVar);
  res.render('editproduct', idObj);
});

router.get('/:id', (req, res) => {
  let idVar = req.params.id;
  let idObj = productsDb.getById(idVar);
  res.render('product', idObj);
});

// router.get('/:id/edit', (req, res) => {
//   let idVar = req.params.id;
//   let idObj = productsDb.getById(idVar);
//   res.render('editproduct', idObj);
// });


module.exports = router;