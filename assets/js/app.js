$(document).ready(function() {
    $('.landing-page h1').css('opacity', '0');
    $('.landing-page h1').animate({ opacity: 1 }, 2000);
  });
  
  $(document).ready(function(){
    $('.carousel').carousel();
 });
 
 window.addEventListener("scroll", function() {
    var elementTarget = document.getElementById("gallery");
    var elementPosition = elementTarget.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    if (elementPosition < screenHeight) {
        elementTarget.style.display = "block";
    }
});
