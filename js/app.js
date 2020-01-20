// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// change image on hover


document.getElementById("more").addEventListener("mouseover", mouseOver);
document.getElementById("more").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("more").src = "images/more.png";
}

function mouseOut() {
  document.getElementById("more").src = "images/more-hvr.png";
}
// Add Recipe
