import validator from "validator";

export function validatePassword(password: string): string | boolean {
  const isLengthValid = validator.isLength(password, { min: 8 });
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasDigit = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (!isLengthValid) {
    return "Password must have at least 8 characters";
  }

  if (!hasUpperCase) {
    return "Password must have at least 1 uppercase character";
  }

  if (!hasLowerCase) {
    return "Password must have at least 1 lowercase character";
  }

  if (!hasDigit) {
    return "Password must have at least 1 digit";
  }

  if (!hasSpecialChar) {
    return "Password must have at least 1 special character";
  }

  return false;
}
