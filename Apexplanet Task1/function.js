function showMessage() {
  alert("Hey there!  Thanks for reading my sticky notes!");
}

document.addEventListener("DOMContentLoaded", function() {
  const helloButton = document.getElementById("helloBtn");
  if (helloButton) {
    helloButton.addEventListener("click", showMessage);
  }
});
