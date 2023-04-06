$(document).ready(function() {
    

$(document).ready(function() {
    $('.landing-page h1').css('opacity', '0');
    $('.landing-page h1').animate({ opacity: 1 }, 2000);
  });
  
  
  $(document).ready(function() {
    $('#testimonial-carousel').carousel({
      interval: 3000 // time in milliseconds between each slide
    });
  });
 
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  })

  
  window.addEventListener("load", function() {
    var cookiePopup = document.getElementById("cookie-popup");
    var acceptCookies = document.getElementById("accept-cookies");
    var rejectCookies = document.getElementById("reject-cookies");
  
    acceptCookies.addEventListener("click", function() {
      cookiePopup.style.display = "none";
      // Set a cookie to remember that the user has accepted cookies
      document.cookie = "cookies_accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    });
  
    rejectCookies.addEventListener("click", function() {
      cookiePopup.style.display = "none";
      // Set a cookie to remember that the user has rejected cookies
      document.cookie = "cookies_accepted=false; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    });
  
    // Check if the user has already accepted or rejected cookies
    var cookiesAccepted = document.cookie.indexOf("cookies_accepted=true") !== -1;
    var cookiesRejected = document.cookie.indexOf("cookies_accepted=false") !== -1;
  
    if (!cookiesAccepted && !cookiesRejected) {
      cookiePopup.style.display = "block";
    }
  });
  
});

// Get all the images with the data-src attribute
const images = document.querySelectorAll('img[data-src]');

// IntersectionObserver options
const options = {
  rootMargin: '0px',
  threshold: 0.5
};

// Create the IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // Check if the image is intersecting with the viewport
    if (entry.isIntersecting) {
      // Replace the data-src attribute with src to load the image
      entry.target.src = entry.target.dataset.src;
      // Remove the data-src attribute to avoid loading the image again
      entry.target.removeAttribute('data-src');
      // Unobserve the image
      observer.unobserve(entry.target);
    }
  });
}, options);

// Observe all the images
images.forEach(image => {
  observer.observe(image);
});
