var express=require('express');
var app = express();
var http = require('http');

var server = http.createServer(app);

var port = 9999;

app.get('/',function(req,res){
  res.send('Hello world');
});

app.get('/json', function(req, res){
  res.json('Hello Jason');
});

server.listen(port,function(){
  console.log("running server on port "+port);
});
