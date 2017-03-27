var blurbColor = '#6F732F';

document.querySelector

$(document).ready(function(){

var blurbBackground = {'background-color': '#5D576B'};
// var skillsBackground = {'background-color': '#F4F1BB'};
// var experienceBackground = {'background': '#9BC1BC'};
var notifactionBackground = {'background-color': '#F4F1BB'};
// var testimonialsBackground = {'background-color': '#B38A58'};

$(".button-collapse").sideNav();
$('.carousel').carousel();

$('#blurb').css(blurbBackground);
// $('#skills').css(skillsBackground);
$('#experience').css(experienceBackground);
$('#notifaction').css(notifactionBackground);
$('#testimonials').css(testimonialsBackground);

})