var openNavButton = document.getElementById("navOpenButton");
var navLinks = document.getElementById("navLinks");
var navOpen = false;

openNavButton.onclick = function () {
  if (navOpen === false) {
    navLinks.style.right = "0px";
    navOpen = true;
  } else {
    navLinks.style.right = "-300px";
    navOpen = false;
  }
};
