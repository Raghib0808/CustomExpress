const server = require('./CustomExpress')

// now you can use your own custom express server;
server.get('/',(req,res)=>{
    res.end('Home page')
})
server.get('/contact-us',(req,res)=>{
    res.end('contact-us page')
})
server.get('/dashboard',(req,res)=>{
    res.end('dashboard page')
})

server.listen(8080,function(){
    console.log('Starting my own curstom http server');
})