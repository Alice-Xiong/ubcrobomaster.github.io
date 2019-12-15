$(document).ready(function(){
    window.onscroll = function() {setSticky()};

    var navbar = document.getElementById("robomaster-navbar");
    
    var sticky = navbar.offsetTop;
    
    // Add the sticky class to the navbar when you reach its scroll position. Remove "navbar-sticky" when you leave the scroll position
    function setSticky() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("navbar-sticky");
      } else {
        navbar.classList.remove("navbar-sticky");
      }
    }
});
