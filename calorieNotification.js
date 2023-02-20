let calorieGoal = parseInt(prompt("Enter your calorie goal: "));
let approachingGoal = calorieGoal * 0.8;
let calorieCount = 0;

while (true) {
let calorieInput = parseInt(prompt("Enter the number of calories you have consumed: "));
calorieCount += calorieInput;
if (calorieCount >= approachingGoal && calorieCount < calorieGoal) {
console.log("You are approaching your calorie goal.");
} else if (calorieCount >= calorieGoal) {
console.log("You have exceeded your calorie goal.");
break;
}

console.log("You have consumed a total of", calorieCount, "calories today");
}