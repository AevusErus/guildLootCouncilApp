var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Omega Res Novae Loot Council Assistant' });
  // res.sendFile(path.join(__dirname + '/plain.html'));
});

module.exports = router;
