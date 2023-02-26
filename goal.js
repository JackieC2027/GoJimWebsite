const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let goals = [];

readline.question("Do you have any goals for any weakpoints? \nType exit to exit. To clear goals type clear. ", function processGoal(goal) {
  if (goal === "exit") {
    printGoals();
    readline.close();
  } else {
    if (goal === "clear") {
      goals = [];
      console.log("Goals cleared");
    } else {
      goals.push(goal);
    }
    readline.question("Do you have any other goals for any weakpoints? \nType exit to exit. To clear goals type clear. ", processGoal);
  }
});

function printGoals() {
  let count = 0;
  goals.forEach((goal) => {
    count++;
    console.log(`Goal #${count.toString().padStart(2, "0")} ${goal}`);
  });
}