exercise = input("What exercise are you performing? ")
sets = int(input("How many sets are you doing? "))
RPE = []
startSets = 1
while (startSets >= 1) and (startSets <= sets):
    value = int(input(f"RPE for set #{startSets} "))
    while True:
        if 1 <= value <= 10:
            startSets = startSets + 1
            RPE.append(value)
            break
        else:
            print("RPE is only from 1-10")
            break
else:
    print(f"Tracked all RPE for each set of {exercise}.")
    print(RPE)
    