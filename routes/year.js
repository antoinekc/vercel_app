var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
  const currentYear = new Date().getFullYear();
  res.json({year: currentYear.toString() });
});

module.exports = router;
