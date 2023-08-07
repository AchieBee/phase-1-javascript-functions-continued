// code your solution here
function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}
//Examples
console.log(saturdayFun()); // Output: This Saturday, I want to roller-skate!
console.log(saturdayFun('paint')); // Output: This Saturday, I want to paint!

function mondayWork(task = 'go to the office') {
  return `This Monday, I will ${task}.`;
}
// Examples
console.log(mondayWork()); // Output: This Monday, I will go to the office.
console.log(mondayWork('work from home')); // Output: This Monday, I will work from home.


function wrapAdjective(flair = '*') {
  return function(adjective = 'special') {
    return `You are ${flair}${adjective}${flair}!`;
  };
}

// Call example
const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("amazing")); // Output: "You are !!!amazing!!!"


//Explanation:

//The saturdayFun function takes an optional activity parameter and returns a string indicating the desired activity for Saturday. If no argument is passed, the default activity is "roller-skate."

//The mondayWork function takes an optional task parameter and returns a string indicating the task for Monday. If no argument is passed, the default task is "go to the office."

//The wrapAdjective function returns an inner function that takes an optional adjective parameter and creates a string with visual flair. The flair parameter is used to add visual flair to the adjective. The default value for flair is "*," and the default value for adjective is "special."

//In the example call, we create an encouragingPromptFunction using wrapAdjective("!!!"), which sets the flair to "!!!" when calling the inner function. When we call encouragingPromptFunction("amazing"), it returns the string "You are !!!amazing!!!".





