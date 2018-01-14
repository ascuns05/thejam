var express = require('express');
var router = express.Router();

/* GET blog listing. */
router.get('/', function(req, res) {
  res.render('blog', { title: 'Blog' });
});

module.exports = router;
