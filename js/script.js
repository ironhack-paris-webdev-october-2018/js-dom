console.log("SCRIPT.JS CONNECTED!");

var dogTitle = document.querySelector("h1");
var catDiv = document.querySelector("#cat");

// run this function when the H1 is CLICKED
dogTitle.onclick = function () {
  console.log("coucou click");

  // when it's clicked make these changes
  catDiv.innerHTML = "Cat: Oreo";
  catDiv.style.backgroundColor = "black";
  catDiv.style.color = "white";
};

// -------------------------------------------------------------------

var mouseDivs = document.querySelectorAll(".mouse");

// run this function when ANY KEY is pressed down
document.onkeydown = function () {
  console.log("coucou keyboard");

  // when a key is pressed make these changes to EACH MOUSE div
  mouseDivs.forEach(function (oneMouse) {
    oneMouse.innerHTML = "Minnie Mouse";
    oneMouse.style.backgroundColor = "grey";
    oneMouse.style.color = "white";
  });
};

// ----------------------------------------------------

var mouseButton = document.querySelector("button");
var mouseWrapper = document.querySelector(".mouse-hole");

mouseButton.onclick = function () {
  // create the div and give its contents and styling (it's NOT in the DOM yet)
  var newMouse = document.createElement("div");
  newMouse.innerHTML = "Minnie Mouse";
  newMouse.style.textDecoration = "underline";
  newMouse.style.fontSize = "20px";
  newMouse.style.color = "red";

  // add the new div to an element ALREADY in the DOM
  mouseWrapper.appendChild(newMouse);
};

// ------------------------------------------------------

catDiv.onclick = function () {
  console.log("coucou remove the mice");
  mouseWrapper.remove();
  mouseButton.remove();
};
