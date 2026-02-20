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
