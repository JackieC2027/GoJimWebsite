def percentage(reps):
    percent = (100 - (reps * 2.5))
    return percent

weight = float(input("Lift Weight in kg: "))
reps = int(input("Reps: "))

if reps <= 39:
    print(weight,"kg is ", format(percentage(reps),".1f"), "% of your 1 rep max", sep = "")
    finalWeight = weight / percentage(reps) * 100
    print("Your estimated 1 rep max is ", format(finalWeight,".2f"), "kg.", sep = "")
else:
    print("That is too many reps!")
    print("1 rep max is only accurate with lower rep ranges")
