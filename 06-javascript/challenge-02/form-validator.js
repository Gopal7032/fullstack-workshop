
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const submitButton = document.getElementById("submitBtn");

function showError(input, message) {
  input.nextElementSibling.innerText = message;
}


function showSuccess(input) {
  input.nextElementSibling.innerText = "";
}

function validateUsername() {
  const regex = /^[a-zA-Z0-9]{3,15}$/;
  if (!regex.test(username.value.trim())) {
    showError(username, "Username must be 3–15 alphanumeric characters");
    return false;
  }
  showSuccess(username);
  return true;
}


function validateEmail() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email.value.trim())) {
    showError(email, "Invalid email format");
    return false;
  }
  showSuccess(email);
  return true;
}



function validatePassword() {
  const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
  if (!regex.test(password.value)) {
    showError(password, "Password must be strong");
    return false;
  }
  showSuccess(password);
  return true;
}


function validateConfirmPassword() {
  if (confirmPassword.value !== password.value || confirmPassword.value === "") {
    showError(confirmPassword, "Passwords do not match");
    return false;
  }
  showSuccess(confirmPassword);
  return true;
}

function formValidity() {
  submitButton.disabled = !(
    validateUsername() &&
    validateEmail() &&
    validatePassword() &&
    validateConfirmPassword()
  );
}

username.addEventListener("blur", () => {
  validateUsername();
  formValidity();
});


email.addEventListener("blur", () => {
  validateEmail();
  formValidity();
});


password.addEventListener("blur", () => {
  validatePassword();
  formValidity();
});


confirmPassword.addEventListener("blur", () => {
  validateConfirmPassword();
  formValidity();
});

// Prevent form submission for demonstration purposes
document.getElementById("registerForm")
  .addEventListener("submit", (e) => e.preventDefault());