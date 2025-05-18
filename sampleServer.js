// This is a simple HTTP server that listens on port 7000 and responds with "Welcome" to any request.
// It uses the built-in 'http' module in Node.js to create the server and handle requests.
// The server is created using the 'createServer' method, which takes a callback function as an argument.
// The callback function is executed whenever a request is received.
// The server listens on port 7000, and when a request is made, it sends a response with the text "Welcome".
var http=require('http');
http.createServer(function(req,res){
    res.write("Well Done");
    res.end();
}).listen(7000)
//server callback function

/*
function server(req,res){
    res.write("Welcome");
    res.end()
}
*/
