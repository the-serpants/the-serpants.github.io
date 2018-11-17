var d = new Date()
document.getElementById("cp-year").innerHTML=d.getFullYear();
document.getElementById("mainnav").classList.remove("nav-scrolled");
var scrollpos = window.scrollY;
var header = document.getElementById("mainnav");
var navlogo = document.getElementById("navbarlogo");
function add_class_on_scroll() {
  header.classList.add("nav-scrolled");
}

function remove_class_on_scroll() {
  header.classList.remove("nav-scrolled");
}
window.addEventListener('scroll', function(){
  //Here you forgot to update the value
  scrollpos = window.scrollY;
  // Hide logo
  if(scrollpos > window.innerHeight/2 + 1){
    navlogo.classList.add("hidden");
  }
  else {
    navlogo.classList.remove("hidden");
  }
  // Make navbar opaque
  if(scrollpos > (window.innerHeight - 50)){
    add_class_on_scroll();
  }
  else {
    remove_class_on_scroll();
  }
  // console.log(scrollpos);
});
// Hamburger menu auto switch
document.addEventListener('DOMContentLoaded', function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
        header.classList.add("nav-scrolled");
      });
    });
  }
});

