import time

goals = []

def mainMenu():
    print("Cardio and Time Goals List")
    print("1. Show all goals")
    print("2. Add goal")
    print("3. Check off goal")
    print("4. Quit")

def showGoals():
    if len(goals) == 0:
        print("No tasks to show.")
    else:
        for i, goal in enumerate(goals):
            print(f"{i + 1}. {goal}")
            time.sleep(2)

def addGoal():
    newGoal = input("Enter goal: ")
    goals.append(newGoal)
    print("Goal added!")
    time.sleep(2)

def deleteGoal():
    if len(goals) == 0:
        print("No goals to check off.")
    else:
        goalIndex = int(input("Enter goal number to check off: "))
        if goalIndex > 0 and goalIndex <= len(goals):
            del goals[goalIndex - 1]
            print("Goal checked off.")
        else:
            print("Invalid goal number.")

while True:
    try:
        mainMenu()
        option = int(input("Enter option: "))
        if option == 1:
            showGoals()
        elif option == 2:
            addGoal()
        elif option == 3:
            deleteGoal()
        elif option == 4:
            print("Bye!")
            break
        else:
            print("Invalid option.")
    except ValueError:
        print("Invalid option.")
        time.sleep(2)
