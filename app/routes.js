// ap/routes.js 
// require express
var express = require('express');
var path    = require('path');

// create our router object
var router = express.Router();

// export our router
module.exports = router;

// route for our homepage
router.get('/', function(req, res) {
  res.render('pages/home');
});

// route for our other pages
router.get('/about', function(req, res) {
  res.render('pages/about');
});

router.get('/contact', function(req, res) {
  res.render('pages/contact');
});

router.get('/services', function(req, res) {
  res.render('pages/services');
});

router.get('/tours', function(req, res) {
  res.render('pages/tours');
});

router.post('/contact', function(req, res) {
  res.send('Thanks for contacting us, ' + req.body.name + '! We will respond shortly!');
});