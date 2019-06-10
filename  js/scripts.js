$(document).ready(function() {
  $(".img-fluid").click(function() {
    $(".img-fluid").hide();
  });
});
$('.form-cont').submit(function(event) {
    var name = $('input#name').val();
    var email = $('input#email').val();
    if (name && email != '') {
      alert('Thank you so much for contacting us  ' + name + ' we appreciate your feedback');
      alert("Your message has been received!")
    }
     else {
      alert('Invalid input');
    }
    event.preventDefault();
  });
