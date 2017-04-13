# SignThisGitHub
A web app that translates sign language into English
Purpose: To ease communication between the speaking and non-speaking world

In the main page, SignThis has a camera that after the click of a button takes a picture 
and sends it to the Clarifai platform, which processes the picture and the web app then 
displays the interpreted letter.

IMPORTANT NOTES:
IF YOU WANT TO RUN THIS, TYPE THIS IN YOUR TERMINAL: npm start 
IF YOU MAKE CHANGES TO THIS FILE, YOU HAVE TO STOP THE SERVER, AND TYPE: browserify main.js -o bundle.js
IF ONE OF THESE COMMANDS DOES NOT WORK, TYPE sudo IN FRONT OF EVERYTHING
AND MOST IMPORTANTLY, IF YOU USE THESE COMMANDS, MAKE SURE YOU ARE IN THE RIGHT FOLDER
IF YOU ARE NOT, TYPE cd FOLLOWED BY THE FOLDER WHERE YOU WANT TO GO (E.G. cd Documents/)
FOR NOW: TO GO TO THE FIRST PAGE, TYPE localhost:3000 IN YOUR BROWSER
TO GO TO THE SECOND PAGE, THE START BUTTON DOES NOT WORK SO TYPE localhost:3000/settings IN YOUR BROWSER

Future improvements: Incorporating a voice feature that would say the word as it is interpreted
Technologies used: Clarifai API, Materialize.CSS API
Coded in: JavaScript, HTML
