var express=require('express');
var app = express();
var http = require('http');

var server = http.createServer(app);

var port = 9999;

app.get('/',function(req,res){
  res.send('Hello world');
});

server.listen(port,function(){
  console.log("running server on port "+port);
});

// testserver = function(){

//   app.get('/',function(req,res){
//     res.send('Hello world');
//   });

//   server.listen(port,function(){
//     console.log("running server on port "+port);
//   });
// };

// module.exports = testserver;