
describe('homepage',function(){
  before(function(){
    casper.start('http://localhost:9999');
  });

  it('hello worlds',function() {
    casper.then(function(){
      expect('body').to.have.text('Hello world');
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