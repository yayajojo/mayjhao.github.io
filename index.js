// jshint esversion:6
// popup window displayed for showing the work experience
// Get the modal
// 1. woking-holiday javascript:"woking-holiday_modal", "woking-holiday_btn", "woking-holiday_close"

let woHoBtn = document.getElementById("woking-holiday_btn");
let woHoModal = document.getElementById("woking-holiday_modal");
let woHoClose = document.getElementById("woking-holiday_close");
// When the user clicks on the button, open the modal
woHoBtn.onclick = function() {
  woHoModal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
woHoClose.onclick = function() {
  woHoModal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == woHoModal) {
    woHoModal.style.display = "none";
  }
};
