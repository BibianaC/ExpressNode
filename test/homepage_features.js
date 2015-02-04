var server=require('../server');



describe('homepage',function(){
  before(function(){
    // testserver();
    casper.start('http://localhost:9999');
  });

  it('hello worlds',function() {
    casper.then(function(){
      expect('body').to.have.text('Hello world');
    });
  });
});