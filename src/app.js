var chocolates = [
  "green",
  "green",
  "green",
  "silver",
  "blue",
  "crimson",
  "purple",
  "red",
  "crimson",
  "purple",
  "purple",
  "green",
  "pink",
  "blue",
  "red",
  "silver",
  "crimson",
  "purple",
  "silver",
  "silver",
  "red",
  "green",
  "red",
  "silver",
  "pink",
  "crimson",
  "purple",
  "green",
  "red",
  "silver",
  "crimson",
  "pink",
  "silver",
  "blue",
  "pink",
  "crimson",
  "crimson",
  "crimson",
  "red",
  "purple",
  "purple",
  "green",
  "pink",
  "blue",
  "red",
  "crimson",
  "silver",
  "purple",
  "purple",
  "purple",
  "red",
  "purple",
  "red",
  "blue",
  "silver",
  "green",
  "crimson",
  "silver",
  "blue",
  "crimson",
  "purple",
  "green",
  "pink",
  "green",
  "red",
  "silver",
  "crimson",
  "blue",
  "green",
  "red",
  "red",
  "pink",
  "blue",
  "silver",
  "pink",
  "crimson",
  "purple",
  "green",
  "red",
  "blue",
  "red",
  "purple",
  "silver",
  "blue",
  "pink",
  "silver",
  "crimson",
  "silver",
  "blue",
  "purple",
  "purple",
  "green",
  "blue",
  "blue",
  "red",
  "red",
  "silver",
  "purple",
  "silver",
  "crimson",
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates, color, count) {
  var addF = [];
  if (chocolates == color) {
    for (let i = 0; i < count; i++) {
      addF[i] = chocolates.unshift();
    }
    return addF;
  } else if (chocolates.length >= 0) {
    if (color == "red") {
      for (let i = 0; i < count; i++) {
        addF[i] = chocolates.unshift();
      }
      return addF;
    }
  } else {
    return "Number cannot be zero/negative";
  }
}

//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates, number) {
  var remF = [];
  if (number > chocolates.length) {
    return "Insufficient chocolates in the dispenser";
  } else if (number > 0) {
    for (let i = 0; i < number; i++) {
      remF[i] = chocolates.shift();
    }
    return remF;
  } else {
    return "Number cannot be zero/negative";
  }
}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(number, chocolates) {
  var remF = [];
  if (number > chocolates.length) {
    return "Insufficient chocolates in the dispenser";
  } else {
    return "Number cannot be zero/negative";
  }
  for (let i = 0; i < number; i++) {
    remF[i] = chocolates.pop();
  }
  return remF;
}

//Progression 4: Dispense ___ chocolates of ____ color

function dispenseChocolatesOfColor(chocolates, number, color) {
  let a = [];
  var fav = 0;
  if (number > chocolates.length)
    return "Insufficient chocolates in the dispenser";
  if (number <= 0) return "Number cannot be zero/negative";
  for (var i = chocolates.length - 1; i >= 0; i--) {
    if (chocolates[i] == color) {
      a.push(chocolates.pop());
      fav++;
      if (fav == number) return a;
    }
  }
  if (fav != number) return "Insufficient chocolates in the dispenser";
}
//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

//Progression 6: Sort chocolates based on count in each color. Return array of colors

//Progression 7: Change ___ chocolates of ____ color to ____ color
//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
//Challenge 1: Remove one chocolate of ____ color from the top
//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
