var express = require('express');
var router = express.Router();
var appdata = require('../data.json');


/* GET home page. */
router.get('/', function(req, res) {

  res.render('index', { 
  	title: 'Home',
  	page: 'home'
  });
});

module.exports = router;