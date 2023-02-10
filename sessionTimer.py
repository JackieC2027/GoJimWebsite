import time

def runTimer():
    print("Welcome to the Cardio Timer!")
    while True:
        startTime = input("Type 'start' to begin the timer: ")
        if startTime.strip().lower() != "start":
            continue
        else:
            startSeconds = time.time()
            print("The timer has started!")
            pass
        while True:
            try:
                middleInput = input("Type 'end' to stop the time or type 'now' to present the current time: ")
                if middleInput.strip().lower() == "end":
                    updatedTime = time.time()
                    updatedTime -= startSeconds
                    print("The timer has stopped.")
                    break
                elif middleInput.strip().lower() == "now":
                    updatedTime = time.time()
                    updatedTime -= startSeconds
                    print(f"Your current time is {updatedTime:.2f} seconds\n")
            except ValueError as e:
                print("Invalid input!")
        break
        
if __name__ == "__main__":      
    runTimer()
