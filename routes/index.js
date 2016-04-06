var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The International Fleet Home Page' });
});

/* GET about page. */
router.get('/heroes', function(req, res, next) {
  res.render('heroes', { title: 'Our Heroes' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact us today !' });
});

router.get('/technology', function(req, res, next) {
  res.render('technology', { title: 'Our Technology!' });
});


module.exports = router;
