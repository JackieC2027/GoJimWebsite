def cardioSessionInfo():
  try:
    userAge = float(input("Enter your age: "))
    userWeight = float(input("Enter your weight (pounds): "))
    userHeartRate = float(input("Enter your heart rate: "))
    workoutTime = float(input("Enter your workout duration (minutes): "))
    caloriesBurned =  float(((userAge * 0.2017) - (userWeight * 0.09036) + (userHeartRate * 0.6309) - 55.0969)*(workoutTime/4.148)) 
    userNotes =  str(input("Notes: "))
  except: 
    print("Input is invalid. Please try again.")
    cardioSessionInfo()

  if workoutTime <= 0 or userAge <= 0 or userWeight <= 0 or userHeartRate <= 0:
    print("One or more input is invalid. Please try again.")
    cardioSessionInfo()

  print(f"\nDuration: {workoutTime:.2f} minutes")
  print(f"Calories Burned: {caloriesBurned:.2f}")
  print(f"Notes: {userNotes}")

cardioSessionInfo()
