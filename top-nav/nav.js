
var toggleVisible = function(element) {
  if (element.style.display === 'block') {
    return element.style.display = 'none';
  } else {
    return element.style.display = 'block';
  }
}

var hamburgerMenu = document.getElementById("hamburger-icon")
var mobileMenu = document.getElementById('mobile-menu')

hamburgerMenu.addEventListener('click', function() {
  toggleVisible(mobileMenu);
});

var mobileMenuItems = document.querySelectorAll('.mobile-menu__item')

mobileMenuItems.forEach( function(element){
  var dropdown = element.querySelector('.mobile-dropdown');
  if (dropdown) {
    element.addEventListener('click', function() {
      toggleVisible(dropdown);
    });
  }
});
