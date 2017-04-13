// IMPORTANT NOTES:
// IF YOU WANT TO RUN THIS, TYPE THIS IN YOUR TERMINAL: npm start 
// IF YOU MAKE CHANGES TO THIS FILE, YOU HAVE TO STOP THE SERVER, AND TYPE: browserify main.js -o bundle.js
// IF ONE OF THESE COMMANDS DOES NOT WORK, TYPE sudo IN FRONT OF EVERYTHING
// AND MOST IMPORTANTLY, IF YOU USE THESE COMMANDS, MAKE SURE YOU ARE IN THE RIGHT FOLDER
// IF YOU ARE NOT, TYPE cd FOLLOWED BY THE FOLDER WHERE YOU WANT TO GO (E.G. cd Documents/)
// FOR NOW: TO GO TO THE FIRST PAGE, TYPE localhost:3000 IN YOUR BROWSER
// TO GO TO THE SECOND PAGE, THE START BUTTON DOES NOT WORK SO TYPE localhost:3000/settings IN YOUR BROWSER


// Runs on the front end
var Clarifai = require('clarifai');

var app = new Clarifai.App('QcKZsPZHdpkNJsUtRnXGaU-sKpI9rgxuruPw3uIn','0SAfhlaaZqIoteomCMrnO-Uf9rBwFXSv0TyganoX');


 var video = document.querySelector("#videoElement");
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
    if (navigator.getUserMedia) {
        navigator.getUserMedia({video: true}, handleVideo, videoError);
    }
    function handleVideo(stream) {
        video.src = window.URL.createObjectURL(stream);
    }
    function videoError(e) {
        // do something
    }
    var v,canvas,context,w,h;
    var imgtag = document.getElementById('imgtag');
document.getElementById('save').addEventListener('click',function(e){
    
    var uri = draw(v,context,w,h); // when save button is clicked, draw videoErrordeo feed to canvas
    console.log(app);
    console.log(app.models);
    predict(uri,app);
    
});


document.addEventListener('DOMContentLoaded', function(){
    // when DOM loaded, get canvas 2D context and store width and height of element
    v = document.getElementById('videoElement');
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    w = canvas.width;
    h = canvas.height;

},false);

function draw(v,context,w,h) {

    if(v.paused || v.ended) return false; // if no video, exit here

    context.drawImage(v,0,0,w,h); // draw video feed to canvas
   
   var uri = canvas.toDataURL("image/png"); // convert canvas to data URI
   imgtag.src = uri; // add URI to IMG tag src
var uri = uri.replace(/^data:image\/[a-z]+;base64,/, "");

    console.log(uri); // uncomment line to log URI for testing

   

    return uri;
}

var finalString = "";
function predict(uri,app){

    app.models.predict("ASL", {base64:uri}).then(
        function(response){
            for (var i = 0; i < response.outputs.length; ++i) {
                //console.log(response.outputs[i].data.concepts);
                 //console.log(response.outputs[i].data.concepts.name);
                 var output = response.outputs[i].data.concepts[i].name;
                 if (output == "Letter H") {
                    finalString += "H";
                 } 
                 else if (output == "Letter A") {
                    finalString += "A";
                 } 
                 else if (output == "Letter C") {
                    finalString += "C";
                 } 
                 else if (output == "Letter K") {
                    finalString += "K";
                 } 
                 else if (output == "Letter N") {
                    finalString += "N";
                 } 
                 else if (output == "Letter Y") {
                    finalString += "Y";
                 } 
                 else {
                    finalString += "";
                 }
                     
                 alert(finalString);
            }

            // for (var key in response.outputs) {
            //     console.log(key.data.concepts.value);
            // }
        },
        function(err){
        console.error(err);
        })
};
