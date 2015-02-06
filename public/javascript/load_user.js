function addProfileFromUsername(username) {
  $('.spinner').show();

  $.get('https://api.github.com/users/'+ username, function(user){
    var newProfile = Mustache.render($('#profile-template').html(),user);
    $(newProfile).appendTo('.profile-container').slideDown();

    

  }).error(function() {
    // alert('No such user with the username: ' + username);
    $('.modal').addClass('shown');

    $('.modal .close').on('click',function(){
      $('.modal').removeClass('shown');
    });
  }).always(function(){
      $('#username').val('');
      $('.spinner').css({display: 'none'});
    });
}

$(document).ready(function(){
  $('#add_profile').on('submit', function(event) {
    event.preventDefault();
    addProfileFromUsername($('#username').val());
  });
  $('.profile-container').on('click', '.close', function() {
    $(this).parent().slideUp(function() {
      $(this).remove();
    });
    
  });

});
