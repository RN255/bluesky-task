// get variables for slid out menu
var openNavButton = document.getElementById("navOpenButton");
var navLinks = document.getElementById("navLinks");
var navOpen = false;

// variables for hamburger bars
var openBarTop = document.getElementById("openBarTop");
var openBarMiddle = document.getElementById("openBarMiddle");
var openBarBottom = document.getElementById("openBarBottom");

// function for slide out menu and hamburger transformation
openNavButton.onclick = function () {
  if (navOpen === false) {
    // display nav bar
    navLinks.style.right = "0px";
    navOpen = true;

    // transform hamburger bars
    openBarTop.style.transform = "rotate(45deg)";
    openBarTop.style.transition = "0.5s";
    openBarTop.style["transformOrigin"] = "2px 7px";

    openBarMiddle.style.visibility = "hidden";
    openBarMiddle.style.transition = "0.1s";

    openBarBottom.style.transform = "rotate(-45deg)";
    openBarBottom.style.transition = "0.5s";
    openBarBottom.style["transformOrigin"] = "0px 7px";
  } else {
    // hide nav bar
    navLinks.style.right = "-300px";
    navOpen = false;
    // return hamburger bars to normal
    openBarTop.style.transform = "rotate(0deg)";

    openBarMiddle.style.visibility = "visible";
    openBarMiddle.style.transition = "1s";
    openBarBottom.style.transform = "rotate(0deg)";
  }
};
