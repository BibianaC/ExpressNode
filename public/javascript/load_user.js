function addProfileFromUsername(username) {
  $.get('https://api.github.com/users/'+ username, function(user){
    var newProfile = Mustache.render($('#profile-template').html(),user);
    $(newProfile).appendTo('.profile-container').slideDown();
  }).error(function() {
    alert('No such user with the username: ' + username);
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
