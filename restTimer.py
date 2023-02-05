# Written by Amaro Truong on 2/4/2023
# Allows users to set a timer for rest periods and be alerted when timer is done

import time

restPeriod = int(input("Enter Rest Period: "))

if restPeriod == 1:
    print("Timer started for", restPeriod, "minute")
else:
    print("Timer started for", restPeriod, "minutes")

time.sleep(restPeriod * 60)

print("Times up!")



