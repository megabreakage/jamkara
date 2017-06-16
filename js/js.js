// business logic
function submitForm(){
  _('send').disabled = true;
  _('status').innerHTML = 'Please Wait . . .';
  var formdata = new FormData();
  formdata.apppend('name', _('name').value);
  formdata.append('email', _('email').value);
  formdata.append('email', _('email').value);
  var ajax = new XHTMLHttpRequest();
  ajax.open('POST', 'example_parser.php');
  ajax.onreadystatechange = function(){
    if(ajax.readystate == 4 && ajax.status == 200){
      if (ajax.responseText == 'success') {
        _('my_form').innerHTML = '<h2> Thanks '+_('name').value+', your message was send successfully!';
      } else {
        _('status').innerHTML = ajax.responseText;
        _('send').disabled = false;
      }
    }
  }
  ajax.send(formdata);
}

// user interface logic
$(document).ready(function() {
  $('#contactForm').submit(function(){
    submitForm();
  });
  //corousel code
  $('#carouselFade').carousel();
  // new WOW().init();
  //add animated class to p
  $('.logo, h1, h2, h3, h4, h5, h6').addClass('animated wow bounceInLeft');
  $('.topMenu, p').addClass('animated wow bounceInRight');
  $('.services').addClass('animated wow bounceIn');

  //START THE CODE FOR SMOOTH SCROLLING

  // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 2000, function() {
        });
      }
    }
  });
  //END THE CODE FOR SMOOTH SCROLLING

  //about button controls
  $("button#aboutMore").click(function() {
    $("#missionVision").slideDown(6000);
    $("#aboutMore").slideUp(600);
	});

  //get in touch button controls
  $("button#getInTouch").click(function() {
    $("#viewContacts").slideDown(5000);
    $("#getInTouch").fadeOut(800);
    $("#divOpenForm").slideDown(2000);
    $("#fillForm").slideUp(5000);
  });

  // //contact us button controls
  // $("button#openForm").click(function() {
  //   $("#viewContacts").slideUp(2000);
  //   $("#getInTouch").fadeIn(800);
  //   $("#divOpenForm").slideUp(2000);
  //   $("#fillForm").slideDown(5000);
  // });

});
