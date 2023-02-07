def cardioSessionInfo():
  try:
    userWorkout = str(input("Enter your workout: "))
    workoutTime = float(input("Enter your workout duration (minutes): "))
    workoutDistance = int(input("Enter your workout distance (miles): "))
    caloriesBurned =  int(input("Enter amount of calories burned: "))
    userNotes =  str(input("Notes: "))
  except: 
    print("Input is invalid. Please try again.")
    cardioSessionInfo()

  if workoutTime <= 0 or workoutDistance <= 0 or caloriesBurned <= 0:
    print("One or more input is invalid. Please try again.")
    cardioSessionInfo()

  print(f"Workout: {userWorkout}")
  print(f"Duration: {workoutTime:.2f} minutes")
  print(f"Distance: {workoutDistance} miles")
  print(f"Calories Burned: {caloriesBurned}")
  print(f"Notes: {userNotes}")

cardioSessionInfo()