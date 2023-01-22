
console.log("Your index.js file is loaded correctly!");

var image = document.getElementById("thumbnail");

image.addEventListener("mouseenter", function() {
    "hover"
  this.style.opacity = "0.5";
  this.innerHTML = "View Case Study";
});

image.addEventListener("mouseleave", function() {
    "hover"
  this.style.opacity = "1";
  this.innerHTML = "";
});