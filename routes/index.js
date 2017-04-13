// In the server before the page loads

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
// req is request, res is respond
 res.render('index', { title: 'SignThis' });
});

router.get('/settings', function(req, res, next) {

 res.render('settings', { title: 'SignThis'});
});

router.post('/settings', function(req, res, next) {
    res.render();
    //res.json(), res.send()
})

var Clarifai = require('clarifai');

// instantiate a new Clarifai app passing in your clientId and clientSecret
var app = new Clarifai.App(
 'QcKZsPZHdpkNJsUtRnXGaU-sKpI9rgxuruPw3uIn',
 '0SAfhlaaZqIoteomCMrnO-Uf9rBwFXSv0TyganoX'
);
router.get('/analyze_image', function(req, res, next) {
    app.models.predict("swift", ["http://i.imgur.com/GaCJE1b.jpg"]).
    then(
   function(response) {
       for(var i = 0; i < response.outputs.length; i++) {
           console.log(response.outputs[i].data.concepts);
       }
     res.json(response);
   },
   function(err) {
     console.log(err);
   }
 );

})

module.exports = router;