from tkinter import *

def typedData():
    username = usernameInput.get()
    password = passwordInput.get()
    return username, password

def checkUsername(username):
    if not len(username) > 8:
        return "Your username is too short!"
    elif username[:3].isdigit():
        return "The first 4 characters cannot be numbers!"
    else:
        return "Excellent choice!"
    
def checkPassword(password):
    if not len(password) > 8:
        return "Your username is too short!"
    elif not password.isalnum():
        return "No special characters!"
    else:
        return "Excellent choice!"
    
def checksUserData():
    username, password = typedData()
    if checkUsername(username) == "Excellent choice!":
        if checkPassword(password) == "Excellent choice!":
            accessLabel.config(text="Access Granted")
        else:
            accessLabel.config(text="Your password is not valid!")
    else:
        accessLabel.config(text="Your username is invalid")
#Sign-In Button Initialization            
button = Tk()
#Username Input and Label
userLabel = Label(text="Username:") 
userLabel.grid(row = 0, column = 0, pady = 5)
usernameInput = Entry(text="Username", width = 25)
usernameInput.grid(row = 0, column = 1)
#Password Input and Label 
passwordLabel = Label(text="Password:")
passwordLabel.grid(row = 1, column = 0, pady = 5)
passwordInput = Entry(text="Password", width = 25, show="*")
passwordInput.grid(row = 1, column = 1)
#Forgot Password Button (Unfinished) 
forgottenPassword = Button(button, text="Forgot Password?")
forgottenPassword.grid(row = 2, column = 1)
#Sign-In Reference to Verify
signInButton = Button(button, text="Sign In", command = checksUserData)
signInButton.grid(row = 3, column = 1, pady = 25)
#Output the Verfied Result
accessLabel = Label()
accessLabel.grid(row = 4, column = 1)
#Loops the button for now
button.mainloop()
