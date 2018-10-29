const express = require('express');
const router = express.Router();

router.get('/articles', (req, res) => {
  res.send('this is articles landing');
});


module.exports = router;