const validatePassword = password => {
  const errors = [];
  const suggestions = [];
  let score = 0;

  const commonPasswords = ["password", "123456", "qwerty", "admin", "letmein"];

  // Length
  if (password.length < 8) {
    errors.push("Too short");
    suggestions.push("Use at least 8 characters");
  } else score += 20;

  // Uppercase
  if (!/[A-Z]/.test(password)) {
    errors.push("Missing uppercase letter");
    suggestions.push("Add an uppercase letter");
  } else score += 15;

  // Lowercase
  if (!/[a-z]/.test(password)) {
    errors.push("Missing lowercase letter");
    suggestions.push("Add a lowercase letter");
  } else score += 15;

  // Number
  if (!/\d/.test(password)) {
    errors.push("Missing number");
    suggestions.push("Add a number");
  } else score += 15;

  // Special character
  if (!/[!@#$%^&*()_+\-=]/.test(password)) {
    errors.push("Missing special character");
    suggestions.push("Add a special character");
  } else score += 20;

  // Common password
  if (commonPasswords.includes(password.toLowerCase())) {
    errors.push("Common password");
    suggestions.push("Avoid common passwords");
    score = Math.min(score, 30);
  }

  const finalScore = Math.min(score, 100);

  // Optional: debug log using template literals
  console.log(`Password: "${password}" | Score: ${finalScore} | Valid: ${errors.length === 0}`);

  return {
    isValid: errors.length === 0,
    score: finalScore,
    errors,
    suggestions
  };
};

// TEST
console.log(validatePassword("abc"));
console.log(validatePassword("MyP@ssw0rd!2024"));
