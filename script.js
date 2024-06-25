// Changing the password in dot form into text upon clicking the checkbox
function ViewPassword() {
    var x = document.getElementById("Input");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

// Confirming whether the password is the same upon changing to a new password
function CheckPassword() { 
  var input = document.getElementById('password_confirm');
  if (input.value != document.getElementById('password').value) {
      feedbackElement.textContent('Password Must be Matching.');
  } else {
      // input is valid -- reset the error message
      feedbackElement.textContent('');
  }
}

// Validating whether the email input is in the correct format or not
function validateEmailInput() {
  const emailInput = document.getElementById('emailInput').value;
  const feedbackElement = document.getElementById('emailFeedback');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(emailInput)) {
    feedbackElement.textContent = ""; // Email is valid
  } else {
    feedbackElement.textContent = "Please enter a valid email address.";
  }
}

//main slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}