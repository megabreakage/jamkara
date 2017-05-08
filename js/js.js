// business logic


// user interface logic
$(document).ready(function() {

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
        }, 5000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  //END THE CODE FOR SMOOTH SCROLLING

  //shakes Icons
  $(".iconBackground").hover(function() {
    $(this).effect("shake", { times:3 }, 100);
  });

  //about button controls
  $("button#aboutMore").click(function() {
    $("#missionVision").slideDown(5000);
    $("#aboutMore").fadeOut(5000);
	});

  //get in touch button controls
  $("button#getInTouch").click(function() {
    $("#").slideDown(5000);
  $("#getInTouch").slideUp(8000);
  });

  //contact us button controls
  $("button#openForm").click(function() {
    $("#divOpenForm").slideUp(3000);
    $("#fillForm").slideDown(5000);
  });

});
