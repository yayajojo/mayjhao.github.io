 // jshint esversion:6
// popup window displayed for showing the work experience
// Get the modal
// 1. woking-holiday js:"woking-holiday_modal", "woking-holiday_btn", "woking-holiday_close"

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

// 2.graduate js

let gaeaBtn = document.getElementById("gaea_btn");
let gaeaModal = document.getElementById("gaea_modal");
let gaeaClose = document.getElementById("gaea_close");
// When the user clicks on the button, open the modal
gaeaBtn.onclick = function() {
  gaeaModal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
gaeaClose.onclick = function() {
  gaeaModal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == gaeaModal) {
    gaeaModal.style.display = "none";
  }
};
// 3. patent js
let patentBtn = document.getElementById("patent_btn");
let patentModal = document.getElementById("patent_modal");
let patentClose = document.getElementById("patent_close");
// When the user clicks on the button, open the modal
patentBtn.onclick = function() {
  patentModal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
patentClose.onclick = function() {
  patentModal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == patentModal) {
    patentModal.style.display = "none";
  }
};
// 4. graduate js

let graduateBtn = document.getElementById("graduate_btn");
let graduateModal = document.getElementById("graduate_modal");
let graduateClose = document.getElementById("graduate_close");
// When the user clicks on the button, open the modal
graduateBtn.onclick = function() {
  graduateModal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
graduateClose.onclick = function() {
  graduateModal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == graduateModal) {
    graduateModal.style.display = "none";
  }
};
// 5. college js

let collegeBtn = document.getElementById("college_btn");
let collegeModal = document.getElementById("college_modal");
let collegeClose = document.getElementById("college_close");
// When the user clicks on the button, open the modal
collegeBtn.onclick = function() {
  collegeModal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
collegeClose.onclick = function() {
  collegeModal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == collegeModal) {
    collegeModal.style.display = "none";
  }
};
