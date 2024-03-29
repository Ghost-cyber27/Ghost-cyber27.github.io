
// Toggle between DAy and Night Mode
$('#switch1').on('click', function(){
  $('body').toggleClass('night')
})


// If user visit after 7 pm in night the body will change the style to night class
$(document).ready(function(){
  var date = new Date();
  var current_time = date.getHours();
  if (current_time > 19 || current_time < 6)
    // If time is after 7PM or before 6AM, apply night theme to ‘body’
    document.body.className = "night";
  else
    // Else use ‘day’ theme
    document.body.className = "";
});

$(window).load(function() {
      $("#top-button").hide();
});


// If you hover over the languages I used in project Box it will do fade in animation
$('.project_used span').on({
    mouseover: function() {
        event.preventDefault();
        $(this).animate({opacity: 0.25});
    },
    mouseout: function() {
        event.preventDefault();
        $(this).animate({opacity: 1});
    }
});


