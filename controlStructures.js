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


