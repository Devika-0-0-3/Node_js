const express=require('express')
const path=require('path')
const app=express()

app.use(function(req,res,next){
    console.log("start")
    next()
})

app.get('/signin',function(req,res,next){
    res.sendFile(path.join(__dirname,'signIn.html'))
    console.log('middle')
    next()
})


app.post('/signin',function(req,res){
    res.send('account created')
    console.log(req.body)
    console.log('account')

})
app.use(function(req,res){
    console.log('end')
})


app.get('/about',(req,res)=>res.send('About'))



app.listen(3000,()=>{
    console.log(__dirname)
    console.log(__filename)
    console.log("Server Started")
})