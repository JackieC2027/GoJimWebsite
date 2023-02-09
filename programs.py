program = {}
setReps = []
exerciseNum = 0
print("Welcome to your workout program maker! Type in your exercises, sets, and reps. Type in exit as an exercise to stop.")
isTrue = True
while isTrue:
    exerciseNum += 1
    while True:
        exercise = input(f"Please input exercise #{exerciseNum} ")
        if exercise.isdigit() == False:
            break
        else:
            print("Exercise must be a word")
    if exercise.lower() == "exit":
        break
    while True:
        try:
            sets = int(input(f"Please input number of sets for {exercise}: "))
            break
        except ValueError:
            print("Sets must be a whole number")
            
    while True:
        try:
            reps = int(input(f"Please input number of reps for each set of {exercise}: "))
            setReps = [sets,reps]
            program[exercise] = setReps
            break
        except ValueError:
            print("Reps must be a whole number")
keys = program.keys()
count = 0
print()
print(f"{' ' : <10}{'Exercises': ^15}{'Sets x Reps' : >6}")
for i in keys:
    count += 1
    s = program[i][0]
    r = program[i][1]
    print(f"{f'Exercise #{count}' : <10}{i : ^15}{f'{s}x{r}' : >6}")
            
    
    
    
