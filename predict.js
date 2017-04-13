var Clarifai = require('clarifai');

// instantiate a new Clarifai app passing in your clientId and clientSecret
var app = new Clarifai.App(
  'XCpBG2Hok11FhsD4Qt1iGa3G4dTNQNbIIkjCzb1r',
  'r65eFzSj7kmmtDAzQACQ4XJqB5nRz6EzKtkapjSi'
);

 app.models.predict("swift", ["http://i.imgur.com/GaCJE1b.jpg"]).then(
    function(response) {
    	for(var i = 0; i < response.outputs.length; i++) {
    		console.log(response.outputs[i].data.concepts);
    	}
      
    },
    function(err) {
      console.log(err);
    }
  );