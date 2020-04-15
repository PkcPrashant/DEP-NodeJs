var express = require('express');
var router = express.Router();

router.get('/userprofile', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send({
    fullname: "Prashant Choudhary",
    email: "pc22230@gmail.com",
    phone: "7543990436"
  })

});

module.exports = router;
