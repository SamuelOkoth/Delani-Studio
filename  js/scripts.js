$(document).ready(function(){
 $('#main').click(function(){
   $(".hide").fadeToggle(1000);
   $(".img-fluid").fadeToggle(1000);
 });
 $('#TT').click(function(){
   $(.class="hide2").fadeToggle(1000);
   $(.img-float").fadeToggle(1000);
 });
 $('#SS').click(function(){
   $(".hide3").fadeToggle(1000);
   $(".img-sink").fadeToggle(1000);
 });
});
$('.form-cont').submit(function(event) {
  var name = $('input#name').val();
  var email = $('input#email').val();
  if (name && email != '') {
    alert('Thank you so much for contacting us  ' + name + ' we appreciate your feedback');
    alert("Your message has been received!")
  } else {
    alert('Invalid input');
  }
  event.preventDefault();
});
