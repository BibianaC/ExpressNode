
describe('homepage',function(){
  before(function(){
    casper.start('http://localhost:9999');
  });

  it('hello worlds',function() {
    casper.then(function(){
      expect('body').to.contain.text('Hello world');
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
});