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

//Part 8: Traffic Light System

function trafficLight(color, pedestrianWaiting) {
  switch (color) {
    case "green":
      return "go";
      break;

    case "yellow":
      return "Slow down";
      break;

    case "red":
      if (pedestrianWaiting) {
        return "Stop and wait for pedestrian";
      }
      return "Stop";
      break;

    default:
      return "Malfunction";
  }
}

console.log(trafficLight("green", false));
console.log(trafficLight("red", true));
console.log(trafficLight("yellow", false));
console.log(trafficLight("blue", false));

//Part 9: Movie Ticket Pricing

function getTicketPrice(age, day, isStudent) {
  let weekDay = day.toLowerCase();
  let basePrice;

  //Weekdays
  switch (weekDay) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      basePrice = 12;
      break;

    //Weekends
    case "friday":
    case "saturday":
    case "sunday":
      basePrice = 15;
      break;

    default:
      return "Invalid day";
  }

  let discountedPrice = basePrice;
  if (age < 13) {
    discountedPrice *= 0.5;
  } else if (age >= 65) {
    discountedPrice *= 0.7;
  } else if (
    isStudent &&
    ["monday", "tuesday", "wednesday", "thursday"].includes(weekDay)
  ) {
    discountedPrice *= 0.8;
  }
  return Number(discountedPrice.toFixed(2));
}

console.log(getTicketPrice(10, "Monday", false));
console.log(getTicketPrice(30, "Friday", true));
console.log(getTicketPrice(30, "Tuesday", true));
console.log(getTicketPrice(70, "Sunday", false));

//Part 10: Shipping Cost Calculator

function calculateShipping(weight, destination, shippingSpeed) {
  let baseRate;
  switch (destination) {
    case "domestic":
      baseRate = 5;
      break;
    case "international":
      baseRate = 15;
      break;
    default:
      return "Invalid destination";
  }

  let weightCost = 0;
  if (weight > 5 && weight <= 20) {
    weightCost = 5;
  } else if (weight > 20) {
    weightCost = 10 + (weight - 20) * 0.5;
  }

  const subTotal = baseRate + weightCost;

  let speedMultiplier;
  switch (shippingSpeed) {
    case "standard":
      speedMultiplier = 1;
      break;
    case "express":
      speedMultiplier = 1.5;
      break;
    case "overnight":
      speedMultiplier = 2.5;
      break;
    default:
      return "Invalid input";
  }

  const totalCost = subTotal * speedMultiplier;

  return Number(totalCost.toFixed(2));
}

console.log(calculateShipping(3, "domestic", "standard"));
console.log(calculateShipping(10, "international", "express"));
console.log(calculateShipping(25, "domestic", "overnight"));
console.log(calculateShipping(3, "mars", "standard"));

//Part 11: Rock, Paper, Scissors Game

function rockPaperScissors(player1, player2) {
  let p1 = player1.toLowerCase();
  let p2 = player2.toLowerCase();

  const validChoices = ["rock", "paper", "scissors"];

  if (!validChoices.includes(p1) || !validChoices.includes(p2)) {
    return "Invalid input";
  }

  if (p1 === p2) {
    return "It's a tie";
  }

  if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    return "Player 1 wins";
  }

  return "Player 2 wins";
}
