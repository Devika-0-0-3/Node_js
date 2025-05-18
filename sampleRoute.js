var http=require("http");
var fs=require("fs")
var url=require('url')

http.createServer(function(req,res){
    var q=url.parse(req.url,true)

    if(q.pathname==='/'){

        fs.readFile("samplehtml.html",function(err,data){

            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        
    })
}else if(q.pathname==='/signIn'){
    fs.readFile("signIn.html",(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()
    })
   
}else if(q.pathname==='/signinaction'){
    res.writeHead(200,{'Content-Type':'text/html'})
    console.log(q.query.name)
    res.write('<h1>'+q.query.name+'</h1>')
    res.end()
}else{
    res.writeHead(404,{'Content-Type':'text/html'})
    res.write('error')
    res.end()
}
}).listen(7000,()=>console.log("Server Started"))  
