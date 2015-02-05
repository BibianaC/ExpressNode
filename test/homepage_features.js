describe('homepage',function(){

  var host = 'http://localhost:9999'

  before(function(){
    casper.start(host);
  });

  it('hello worlds',function() {
    casper.then(function(){
      expect('body').to.contain.text('Hello world');
    });
  });

  it('should return JSON for a particular user', function(){
    casper.thenOpen(host + '/users/tansaku', function(response){
      expect(response.headers.get('Access-Control-Allow-Origin')).to.equal('*');
      expect(response.headers.get('Content-Type')).to.equal('application/json; charset=utf-8');
      expect('body').to.have.text('{"login":"tansaku", "html_url":"147", "public_repos":"216", "public_followers":"147", "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3"}');
    });
  });

});

describe('/json', function() {
  before(function() {
    casper.start('http://localhost:9999/json');
  });

  it('Hello world', function() {
    casper.then(function() {
      expect('body').to.contain.text("Hello Jason");
    });
  });
});

describe("greeting", function() {

  var host = 'http://localhost:9999'

  before(function() {
    casper.start(host);
  });

  it("Should greet you", function() {
    casper.thenOpen(host + '/greetings', function() {
      expect('body').to.contain.text('Hello Bibiana');
    });
  });

  it("should reply with jason if query", function(){
    casper.thenOpen(host+"/json.query?name=olo",function(){
      expect('body').to.contain.text('Hello olo');
    });
  });  
});

