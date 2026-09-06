// Get the form elements using getElementById
var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var bioInput = document.getElementById("bioInput");
var submitBtn = document.getElementById("submitBtn");

// Get the places where we will show error messages
var nameError = document.getElementById("nameError");
var emailError = document.getElementById("emailError");
var passwordError = document.getElementById("passwordError");
var bioError = document.getElementById("bioError");
var bioCounter = document.getElementById("bioCounter");

// These variables will track if each field is valid
var nameValid = false;
var emailValid = false;
var passwordValid = false;
var bioValid = false;

// Function to check if the submit button should be enabled
function checkForm() {
    if (nameValid == true && emailValid == true && passwordValid == true && bioValid == true) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

// NAME validation - runs every time the user types
nameInput.addEventListener("input", function() {
    var nameValue = nameInput.value;

    if (nameValue == "") {
        nameError.textContent = "Name cannot be empty";
        nameValid = false;
    } else {
        nameError.textContent = "";
        nameValid = true;
    }

    checkForm();
});

// EMAIL validation - simple check without regular expressions
emailInput.addEventListener("input", function() {
    var emailValue = emailInput.value;

    // Simple beginner way: check if it has @ and a .
    if (emailValue == "") {
        emailError.textContent = "Email cannot be empty";
        emailValid = false;
    } else if (emailValue.indexOf("@") == -1) {
        emailError.textContent = "Email must contain @";
        emailValid = false;
    } else if (emailValue.indexOf(".") == -1) {
        emailError.textContent = "Email must contain a .";
        emailValid = false;
    } else {
        emailError.textContent = "";
        emailValid = true;
    }

    checkForm();
});

// PASSWORD validation
passwordInput.addEventListener("input", function() {
    var passwordValue = passwordInput.value;

    if (passwordValue.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        passwordValid = false;
    } else {
        passwordError.textContent = "";
        passwordValid = true;
    }

    checkForm();
});

// BIO validation and character counter
bioInput.addEventListener("input", function() {
    var bioValue = bioInput.value;
    var bioLength = bioValue.length;

    // Update the character counter
    bioCounter.textContent = bioLength + " / 200 characters";

    if (bioLength > 200) {
        bioError.textContent = "Bio cannot be more than 200 characters";
        bioValid = false;
    } else if (bioLength == 0) {
        bioError.textContent = "Bio cannot be empty";
        bioValid = false;
    } else {
        bioError.textContent = "";
        bioValid = true;
    }

    checkForm();
});

// When the form is submitted
var form = document.getElementById("registrationForm");
form.addEventListener("submit", function(event) {
    // Stop the form from refreshing the page
    event.preventDefault();

    // Show a simple success message
    alert("Form submitted successfully!");
});