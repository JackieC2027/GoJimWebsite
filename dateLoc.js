const dateLoc = {};
const odd = [1, 3, 5, 7, 8, 10, 12];
const even = [4, 6, 9, 11];

while (true) {
  while (true) {
    const date = prompt("Please input date of your workout in mm-dd-yyyy, type exit to stop");
    if (date === "exit") {
      break;
    } else if (
      date.length > 10 ||
      date.length < 0 ||
      date[2] !== "-" ||
      date[5] !== "-"
    ) {
      console.log("invalid date format");
    } else if (parseInt(date.slice(0, 2)) > 12 || parseInt(date.slice(0, 2)) < 0) {
      console.log("invalid month");
    } else if (
      (odd.includes(parseInt(date.slice(0, 2))) &&
        (parseInt(date.slice(3, 5)) > 31 || parseInt(date.slice(3, 5)) < 0)) ||
      (even.includes(parseInt(date.slice(0, 2))) &&
        (parseInt(date.slice(3, 5)) > 30 || parseInt(date.slice(3, 5)) < 0)) ||
      (parseInt(date.slice(0, 2)) === 2 &&
        (parseInt(date.slice(3, 5)) > 29 || parseInt(date.slice(3, 5)) < 0))
    ) {
      console.log("invalid date");
    } else {
      break;
    }
  }
  if (date === "exit") {
    break;
  }
  const location = prompt(`What was the location for your workout on ${date}`);
  dateLoc[date] = location;
}
const keys = Object.keys(dateLoc);
let count = 0;
console.log("\nWorkout #".padEnd(15) + "Date".padEnd(15) + "Location".padEnd(20));
for (const key of keys) {
  count++;
  const location = dateLoc[key];
  console.log(
    `Workout #${count}`.padEnd(15) +
      `${key}`.padEnd(15) +
      `${location}`.padEnd(20)
  );
}