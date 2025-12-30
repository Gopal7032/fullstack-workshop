const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const submitButton = document.getElementById("submitBtn");
const form = document.getElementById("registerForm");

const showError = (input, message) => {
  input.nextElementSibling.textContent = `${message}`;
};

const showSuccess = (input) => {
  input.nextElementSibling.textContent = "";
};

const validateUsername = () => {
  const regex = /^[a-zA-Z0-9]{3,15}$/;
  const value = username.value.trim();

  if (!regex.test(value)) {
    showError(username, `Username must be 3–15 alphanumeric characters`);
    return false;
  }
  showSuccess(username);
  return true;
};

const validateEmail = () => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(email.value.trim())) {
    showError(email, `Invalid email format`);
    return false;
  }
  showSuccess(email);
  return true;
};

const validatePassword = () => {
  const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  if (!regex.test(password.value)) {
    showError(password, `Password must contain 8+ chars, 1 uppercase, 1 number & 1 symbol`);
    return false;
  }
  showSuccess(password);
  return true;
};

const validateConfirmPassword = () => {
  if (confirmPassword.value === "" || confirmPassword.value !== password.value) {
    showError(confirmPassword, `Passwords do not match`);
    return false;
  }
  showSuccess(confirmPassword);
  return true;
};

// Array-based validation (clean & scalable)
const validators = [
  validateUsername,
  validateEmail,
  validatePassword,
  validateConfirmPassword
];

const formValidity = () => {
  submitButton.disabled = !validators.every(fn => fn());
};

// Event listeners
[username, email, password, confirmPassword].forEach(input => {
  input.addEventListener("blur", formValidity);
});

// Prevent submission (demo)
form.addEventListener("submit", e => e.preventDefault());
