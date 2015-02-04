var express=require('express');
var app = express();
var http = require('http');

var server = http.createServer(app);

var port = 9999;

app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
  // res.send('Hello world');
  res.render('index');
});

app.get('/json.query',function(req,res){
   res.render('jsonquery',req.query);
});

app.get('/json', function(req, res){
  res.json('Hello Jason');
});



app.get('/greetings', function(req, res) {
  res.render('greeting', {name: "Bibiana"});
});

server.listen(port,function(){
  console.log("running server on port "+port);
});
