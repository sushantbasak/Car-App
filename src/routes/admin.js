const express = require('express');

const router = express.Router();

router.get('/admin', (req, res) => {
  res.send('Admin Route Reached');
});

module.exports = router;
