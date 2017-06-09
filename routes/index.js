var express = require('express');
var router = express.Router();
var data = require('../public/data').people


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('pages/about', {about: "SauceFest"});
});

router.get('/houses', function(req, res, next) {
	var contact = { "name": "", "phone_number": "", "email": ""}
	res.render('pages/houses', { people: data, contact: contact, errors: "Nothing"});
	console.log('inside get house', req.body);
});

router.post('/houses', function(req, res, next) {
	console.log('inside post', req.body);
	next();
})

module.exports = router;
