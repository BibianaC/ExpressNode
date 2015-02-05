$(document).ready(function(){
  $.get('https://api.github.com/users/marcinwal',function(user){
    var newProfile = Mustache.render($('#profile-template').html(),user);
    $('.profile-container').append(newProfile);
  })
});

// $(document).ready(function(){
//   $.get('https://localhost:9999/users/tansaku',function(user){
//     var newProfile = Mustache.render($('#profile-template').html(),user);
//     // $('.profile-container').append(newProfile);
//   })
// });
