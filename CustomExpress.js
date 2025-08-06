// making my own custom express server using http module

const http = require('http');
const routes = {
    GET:{}
}

const RouteHandler = function(req,res){
    const {method,url}=req;
    const route = routes.GET[url];
    if(route){
        return route(req,res);
    }
}

const server = http.createServer(RouteHandler);
server.get=(path,handler)=>{
      routes.GET[path] = handler;
}
module.exports=server;