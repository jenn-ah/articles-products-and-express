const express = require('express');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.send(`This is products landing`);
    //res.render('./index', *products*);
  })
  .post((req, res) => {

  })
  .put((req, res) => {

  })
  .delete((req, res) => {

  });


module.exports = router;