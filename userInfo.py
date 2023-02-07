def userInfo():
  try:
    userName = str(input("Enter your name: "))
    userAge = int(input("Enter your age: "))
    userWeight = int(input("Enter your weight (lbs): "))
    userHeightFT = int(input("Enter your height (ft): "))
    userHeightIN = int(input("Enter your height (in): "))
  except ValueError:
    print("Input is invalid. Please try again.")
    userInfo()

  if userAge <= 0 or userWeight <= 0 or userHeightFT <= 0 or userHeightIN <= 0:
    print("One or more input is invalid. Please try again.")
    userInfo()

  print(f"Name: {userName}")
  print(f"Age: {userAge}")
  print(f"userWeight: {userWeight}")
  print(f"Height: {userHeightFT}'{userHeightIN}")

userInfo()


