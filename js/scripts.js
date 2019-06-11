/ what we do section
$('.main').click(function () {
  $(this).children('.hide').slideToggle(1200);
  $(this).children('.show').toggle(1500);
});
// giving feedback to the customer
$("button").click(function (e) {
  var client = document.getElementById('name').value;
  alert(' Dear ' + ' esteemed ' + client + ' we have received your message. ' + ' Thank you for the feedback.');
  e.preventDefault();
});

// capturing the input details in form

$("#form").submit(function (e) {
  e.preventDefault();
  var name = $("input#name").val();
  console.log(name);
});

$("#form").submit(function (e) {
  e.preventDefault();
  var email = $("input#email").val();
  console.log(email);
});

$("#form").submit(function (e) {
  e.preventDefault();
  var message = $("textarea#message").val();
  console.log(message);
});
//color of text in form
$('input#name').css('color', 'white');
$('input#email').css('color', 'white');
$('textarea#message').css('color', 'white');


//    reset my form button
$("button").on('click', function () {
  $('form').each(function () {
    this.reset();
  });
});
//portfolio section 
$(".card").hover(function () {
  $(this).children(".portfolio").fadeToggle(1000, "linear");
});
Collapse



