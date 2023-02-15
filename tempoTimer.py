import time

# Get user input for sets, reps, and rep time
sets = int(input("Enter the number of sets: "))
reps = int(input("Enter the number of reps: "))
rep_time = int(input("Enter the time per rep (in seconds): "))
setup_time = int(input("Enter the setup time for your set (in seconds): "))

# Loop through sets and reps
for set_num in range(1, sets+1):
    # Wait for the user to press Enter before starting the set
    input(f"Press Enter to start set {set_num}...")

    print(f"Starting set {set_num}...")
    for seconds in range(setup_time, 0, -1):
        print(f"Setup time left: {seconds} seconds")
        time.sleep(1)
    for rep_num in range(1, reps+1):
        print(f"Starting rep {rep_num}...")
        # Start the timer
        for seconds in range(rep_time, 0, -1):
            print(f"Time left: {seconds} seconds")
            time.sleep(1)
        print("Rep complete!")
    print(f"Set {set_num} complete!")
    