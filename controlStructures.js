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

//Part 5: Switch Statements

function getDayName(dayNumber) {
  switch (dayNumber) {
    case 1:
      return `${dayNumber}: "Monday"`;
      break;

    case 2:
      return `${dayNumber}: "Tuesday"`;
      break;

    case 3:
      return `${dayNumber}: "Wednesday"`;
      break;

    case 4:
      return `${dayNumber}: "Thursday"`;
      break;

    case 5:
      return `${dayNumber}: "Friday"`;
      break;

    case 6:
      return `${dayNumber}: "Saturday"`;
      break;

    case 7:
      return `${dayNumber}: "Sunday"`;
      break;

    default:
      return `${dayNumber}: "Invalid day"`;
  }
}

console.log(getDayName(3));
console.log(getDayName(7));
console.log(getDayName(10));

//Part 6: Simple Calculator

function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "*":
      return num1 * num2;

    case "/":
      if (num2 === 0) {
        return "Cannot divide by zero";
      }
      return num1 / num2;

    case "%":
      if (num2 === 0) {
        return "Cannot divide by zero";
      }
      return num1 % num2;

    default:
      return "Invalid operator";
  }
}

console.log(calculate(10, 5, "+"));
console.log(calculate(10, 5, "-"));
console.log(calculate(10, 5, "*"));
console.log(calculate(10, 0, "/"));
console.log(calculate(10, 5, "^"));

//Part 7: Season Identifier

function getSeason(month) {
  switch (month.toLowerCase()) {
    case "december":
    case "january":
    case "february":
      return "Winter";
      break;

    case "march":
    case "april":
    case "may":
      return "Spring";

    case "june":
    case "july":
    case "august":
      return "Summer";

    case "september":
    case "october":
    case "november":
      return "Fall";

    default:
      return "Invalid month";
  }
}

console.log(getSeason("January"));
console.log(getSeason("july"));
console.log(getSeason("October"));
console.log(getSeason("Smarch"));
