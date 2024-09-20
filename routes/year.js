var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/year', (req, res) => {
  const currentYear = new Date().getFullYear();
  res.json({year: currentYear.toString() });
});

module.exports = router;
