console.log("POST SCRIPT.JS connected");

var postBtn = document.querySelector(".post-button");
var commentList = document.querySelector("ol");
var inputTag = document.querySelector("input");

postBtn.onclick = function () {
  console.log("coucou post comment");

  // create the <li> and give it contents and styling (it's NOT in the DOM yet)
  var newLi = document.createElement("li");
  // use the input's value to get the text the user typed
  newLi.innerHTML = inputTag.value + ' <button class="delete">🗑</button>';

  // add the new <li> to an element ALREADY in the DOM
  commentList.appendChild(newLi);

  // reset the form after the click is done
  inputTag.value = "";
};
