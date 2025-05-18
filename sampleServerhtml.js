var http=require("http");
var fs=require("fs")
//fs is a built-in module in Node.js that provides an API for interacting with the file system.
// It allows you to read and write files, create directories, and perform other file system operations.

http.createServer(function(req,res){
    fs.readFile("samplehtml.html",function(err,data){
        //html if changed then it will be reflected in the browser
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()

    })
    //readFile is an asynchronous method that reads the contents of a file.
    // It takes the file name as the first argument and a callback function as the second argument.
    
}).listen(7000)       

/*
- 200 (OK)

- 201 (Created)

- 202 (Accepted)

- 203 (Non-authoritative information)

- 204 (No content)

- 400 (Bad request)

- 401 (Authorization required)

- 402 (Payment required)

- 403 (Forbidden)

- 404 (Not found)

- 405 (Method not allowed)

- 406 (Not acceptable)

- 407 (Proxy authentication required)

- 408 (Request Timeout)

- 409 (Conflict)

- 410 (Gone)

- 411 (Length required)

- 412 (Precondition failed)

- 413 (Request entity too large)

- 414 (Request URI too large)

- 415 (Unsupported media type)

- 416 (Request range not satisfiable)

- 417 (Expectation failed)

- 422 (Unprocessable entity)

- 423 (Locked)

- 424 (Failed dependency)

- 500 (Internal server error)

- 501 (Not Implemented)

- 502 (Bad gateway)

- 503 (Service unavailable)

- 504 (Gateway timeout)

- 505 (HTTP version not supported)

- 506 (Variant also negotiates)

- 507 (Insufficient storage)

- 510 (Not extended)
*/