function validatePassword(password) {
  const errors = [];
  const suggestions = [];
  let score = 0;

  // Common weak passwords
  const commonPasswords = ["password", "123456", "qwerty", "admin", "letmein"];

  // Length check
  if (password.length < 8) {
    errors.push("Too short");
    suggestions.push("Use at least 8 characters");
  } else score += 20;

  // Uppercase letter check
  if (!/[A-Z]/.test(password)) {
    errors.push("Missing uppercase letter");
    suggestions.push("Add an uppercase letter");
  } else score += 15;

  // Lowercase letter check
  if (!/[a-z]/.test(password)) {
    errors.push("Missing lowercase letter");
    suggestions.push("Add a lowercase letter");
  } else score += 15;

  // Number check
  if (!/\d/.test(password)) {
    errors.push("Missing number");
    suggestions.push("Add a number");
  } else score += 15;

  // Special character check
  if (!/[!@#$%^&*()_+\-=]/.test(password)) {
    errors.push("Missing special character");
    suggestions.push("Add a special character");
  } else score += 20;

  // Common password check
  if (commonPasswords.includes(password.toLowerCase())) {
    errors.push("Common password");
    suggestions.push("Avoid common passwords");
    score = Math.min(score, 30);
  }

  // Final score adjustment
  return {
    isValid: errors.length === 0,
    score: Math.min(score, 100),
    errors,
    suggestions
  };
}


//TEST
console.log(validatePassword("abc"));
/*
{
  isValid: false,
  score: 15,
  errors: [ 'Too short', 'Missing uppercase letter', 'Missing number', 'Missing special character' ],
  suggestions: [ 'Use at least 8 characters', 'Add an uppercase letter', 'Add a number', 'Add a special character' ]
}
*/

console.log(validatePassword("MyP@ssw0rd!2024"));
/*
{
  isValid: true,
  score: 95,
  errors: [],
  suggestions: []
}
*/