var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'project Me' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Service Me' });
});
module.exports = router;
