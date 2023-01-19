// get variables for slide out menu
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

// darken navbar when scrolling away from top
window.onscroll = function () {
  darkenNavBar();
};

function darkenNavBar() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style["backgroundColor"] =
      "rgba(0, 0, 0, 1)";
  } else {
    document.getElementById("nav").style["backgroundColor"] =
      "rgba(0, 0, 0, 0.7)";
  }
}

// change images when looking at accordion
document.getElementById("accordionExteriorButton").onclick = function () {
  document.getElementById("exteriorImg").style.display = "block";
  document.getElementById("interiorImg").style.display = "none";
  document.getElementById("lightsImg").style.display = "none";
  document.getElementById("wheelsImg").style.display = "none";
};

document.getElementById("accordionInteriorButton").onclick = function () {
  document.getElementById("exteriorImg").style.display = "none";
  document.getElementById("interiorImg").style.display = "block";
  document.getElementById("lightsImg").style.display = "none";
  document.getElementById("wheelsImg").style.display = "none";
};

document.getElementById("accordionLightsButton").onclick = function () {
  document.getElementById("exteriorImg").style.display = "none";
  document.getElementById("interiorImg").style.display = "none";
  document.getElementById("lightsImg").style.display = "block";
  document.getElementById("wheelsImg").style.display = "none";
};

document.getElementById("accordionWheelsButton").onclick = function () {
  document.getElementById("exteriorImg").style.display = "none";
  document.getElementById("interiorImg").style.display = "none";
  document.getElementById("lightsImg").style.display = "none";
  document.getElementById("wheelsImg").style.display = "block";
};
