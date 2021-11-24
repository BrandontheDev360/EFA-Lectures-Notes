secret = 42


while True:
    guess = int(input("Guess a number: "))
# print(secret == guess)
    if secret == guess:
        print("You are correct!")
        exit() #exit the loop after correct otherwise you keep guessing even if correct
    elif guess > secret:
        print("Your guess gwas to high")
    else: # Handle to low
        print("Your guess was to low")


# Challenge add a try limit






