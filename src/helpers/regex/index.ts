export const regexLowerCase = /(?=.*[a-z])/; // Password must contain a lower case letter.
export const regexUpperCase = /(?=.*[A-Z])/; //Password must contain an upper case letter
export const regexContainNumber = /(?=.*[0-9])/; // Password must contain a number
export const regexSpecialCharacter = /(?=.*[!@#$%^&*+"'()+-./;:<=>?[\]_~`{}|])/; // Password must contain a special character,
export const regexDigits = /^\d+$/; // regex for only digits
export const regexSpace = / /g; // Match space
export const regexEmail =
  /((?![A-Za-z\d !@#$%^&*+"'()+-./;:<=>?[\]_~`{}|]).)*/g; // Match only english letters and special characters
