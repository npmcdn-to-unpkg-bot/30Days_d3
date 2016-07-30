var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(request, response){
  console.log('You have connected to index.js');
  response.sendFile(path.join(__dirname, '../public/views/index.html'))
});

module.exports = router;
