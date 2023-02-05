# Written by Amaro Truong on 2/4/2023
# Allows users to update and add exercises 

exercises = {'Barbell Bench' : [45,0],
             'Barbell Squat' : [45,0],
             'Barbell Deadlift' : [45,0],
             'Bodyweight Pushup' : [0],
             'Bodyweight Pullup' : [0],
             'Dumbbell Bench' : [5,0],
             'Dumbbell Incline Bench' : [5,0],
             'Machine Chest Fly' : [0,0],
             'Cable Seated Row' : [0,0],
             'Machine Row' : [0,0],
             'Dumbbell Bicep Curl' : [5,0],
             'Machine Bicep Curl' : [0,0],
             'Leg Press' : [0,0],
             'Leg Extension' : [0,0],
             }

exercises[input("Excerise: ")] = [input("Weight/Reps: ")]

print(exercises)
