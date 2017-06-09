var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/asoi', function(req, res, next) {
  res.render('pages/about', {about: "SauceFest"});
});

module.exports = router;
