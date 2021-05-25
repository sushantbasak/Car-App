const express = require('express');

const router = express.Router();

router.get('/order', (req, res) => {
  res.send('Order Route Reached');
});

module.exports = router;
