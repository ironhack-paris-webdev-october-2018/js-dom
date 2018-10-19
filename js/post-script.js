console.log("POST SCRIPT.JS connected");

var postBtn = document.querySelector(".post-button");
var commentList = document.querySelector("ol");
var inputTag = document.querySelector("input");
var deleteBtn = document.querySelectorAll(".delete");


postBtn.onclick = function () {
  console.log("coucou post comment");

  // create the <li> and give it contents and styling (it's NOT in the DOM yet)
  var newLi = document.createElement("li");
  // use the input's value to get the text the user typed
  newLi.innerHTML = inputTag.value + ' <button class="delete">🗑</button>';

  // add the new <li> to an element ALREADY in the DOM
  commentList.appendChild(newLi);

  // add the click functionality to the new button
  var newBtn = newLi.querySelector(".delete");
  newBtn.onclick = function () {
    console.log("coucou delete button");

    // Confirm with the user that the delete is okay
    var isOkay = confirm("Are you sure you want to delete this comment?");
    if (isOkay) {
      // get the PARENT of the <button> (the <li> tag that the <button> is inside)
      var parentLi = newBtn.parentNode;
      // remove the parent from the DOM
      parentLi.remove();
    }
  };

  // reset the form after the click is done
  inputTag.value = "";
};

// add the click functionality to the buttons that are there AT FIRST
deleteBtn.forEach(function (oneButton) {
  oneButton.onclick = function () {
    console.log("coucou delete button");

    // Confirm with the user that the delete is okay
    var isOkay = confirm("Are you sure you want to delete this comment?");
    if (isOkay) {
      // get the PARENT of the <button> (the <li> tag that the <button> is inside)
      var parentLi = oneButton.parentNode;
      // remove the parent from the DOM
      parentLi.remove();
    }
  };
});
