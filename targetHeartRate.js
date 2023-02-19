function targetHeartRate(userAge) {
  var maxHeartRate = 220 - userAge;
  var targetHeartRate = 0.7 * maxHeartRate;

  console.log("Your maximum heart rate is:", maxHeartRate, "beats per minute.");
  console.log("Your target heart rate is:", targetHeartRate, "beats per minute.");
}

var userAge = parseInt(prompt("Please enter your age: "));
targetHeartRate(userAge);
