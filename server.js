var express=require('express');
var app = express();
var http = require('http');

var server = http.createServer(app);

var port = 9999;

var jsonReply = {
  "login": "marcinwal",
  "id": 5985784,
  "avatar_url": "https://avatars.githubusercontent.com/u/5985784?v=3",
  "gravatar_id": "",
  "url": "https://api.github.com/users/marcinwal",
  "html_url": "https://github.com/marcinwal",
  "followers_url": "https://api.github.com/users/marcinwal/followers",
  "following_url": "https://api.github.com/users/marcinwal/following{/other_user}",
  "gists_url": "https://api.github.com/users/marcinwal/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/marcinwal/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/marcinwal/subscriptions",
  "organizations_url": "https://api.github.com/users/marcinwal/orgs",
  "repos_url": "https://api.github.com/users/marcinwal/repos",
  "events_url": "https://api.github.com/users/marcinwal/events{/privacy}",
  "received_events_url": "https://api.github.com/users/marcinwal/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Marcin Walendzik",
  "company": "",
  "blog": "",
  "location": "",
  "email": "",
  "hireable": true,
  "bio": null,
  "public_repos": 30,
  "public_gists": 0,
  "followers": 7,
  "following": 15,
  "created_at": "2013-11-20T00:25:00Z",
  "updated_at": "2015-02-04T17:56:12Z",
  "private_gists": 0,
  "total_private_repos": 0,
  "owned_private_repos": 0,
  "disk_usage": 6613,
  "collaborators": 0,
  "plan": {
    "name": "free",
    "space": 307200,
    "collaborators": 0,
    "private_repos": 0
  }
}




app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
  // res.send('Hello world');
  res.render('index');
});

app.get('/json/queryReply',function(req,res){
  console.log(req.query);
  console.log(req.params);
  param = Object.keys(req.query)[0].toString();
  console.log(param);
  if (Object.keys(req.query) in jsonReply){
    console.log(jsonReply.param);
    res.json(jsonReply.param);
  }
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
