import datetime

notes = []

while True:
    note = input("Enter a note or 'q' to quit: ")
    if note == 'q':
        break
    date = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    notes.append((date, note))

print("Today's notes:")
for i, (date, n) in enumerate(notes, 1):
    print(f"{i}. {date}: {n}")
