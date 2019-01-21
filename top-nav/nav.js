var hamburgerMenu = document.getElementById("hamburger-icon")
var mobileMenu = document.getElementById('mobile-menu')
var mobileMenuItems = document.querySelectorAll('.mobile-menu__item')

var toggleDisplay = function(element) {
  if (element.style.display === 'block') {
    return element.style.display = 'none';
  } else {
    return element.style.display = 'block';
  }
}

var closeAllButSelected = function(selection) {
  mobileMenuItems.forEach( function(element) {
    var mobileDropdown = element.querySelector('.mobile-dropdown');
    if (selection && element.innerHTML === selection.innerHTML) {
      toggleDisplay(mobileDropdown);
    } else if (mobileDropdown) {
      return mobileDropdown.style.display = 'none';
    }
  })
}

hamburgerMenu.addEventListener('click', function() {
  closeAllButSelected();
  toggleDisplay(mobileMenu);
});

mobileMenuItems.forEach( function(element) {
  var dropdown = element.querySelector('.mobile-dropdown');
  if (dropdown) {
    element.addEventListener('click', function() {
      closeAllButSelected(element);
    });
  }
});
