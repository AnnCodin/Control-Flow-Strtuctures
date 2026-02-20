//Part 1: if...else Statements

function classifyTemperature(temp) {
  if (temp < 0) {
    return "Freezing";
  } else if (temp <= 10) {
    return "Cold";
  } else if (temp <= 20) {
    return "Cool";
  } else if (temp <= 30) {
    return "Warm";
  } else {
    return "Hot";
  }
}

console.log(classifyTemperature(-3));
console.log(classifyTemperature(10));
console.log(classifyTemperature(19));
console.log(classifyTemperature(35));

//Part 2: Grade Calculator

function calculateGrade(score) {
  if (score > 100 || score < 0) {
    return "Invalid score";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 60) {
    return "C";
  } else {
    return "F";
  }
}

console.log(calculateGrade(93));
console.log(calculateGrade(82));
console.log(calculateGrade(71));
console.log(calculateGrade(45));
console.log(calculateGrade(110));

//Part 3: Leap Year Checker

function isLeapYear(year) {
  if (year % 4 === 0) {
    return `${year} is a leap year`;
  } else if (year % 100 === 0) {
    return `${year} is NOT a leap year`;
  } else if (year % 400 === 0) {
    return `${year} is a leap year`;
  } else {
    return "false";
  }
}

console.log(isLeapYear(2004));
console.log(isLeapYear(1900));
console.log(isLeapYear(2005));
console.log(isLeapYear(2021));

//Part 4: Login Validator

/**First use the .length method to check if username is at least 5 characters
 * and password is also at leat 8 characters.
 *
 * Use the .test method to check if password contains at least one digit
 * */

function validateLogin(username, password) {
  if (username.length < 5) {
    return {
      isValid: false,
      message: "Username must be at least 5 characters",
    };
  } else if (password.length < 8) {
    return {
      isValid: false,
      message: "Password must be at least 8 characters long.",
    };
  } else if (!/\d/.test(password)) {
    return {
      isValid: false,
      message: "Password must contain at least one number.",
    };
  } else {
    return {
      isValid: true,
      message: "Login credentials are valid.",
    };
  }
}

console.log(validateLogin("john", "pass"));
console.log(validateLogin("john_doe", "password"));
console.log(validateLogin("john_doe", "password123"));

