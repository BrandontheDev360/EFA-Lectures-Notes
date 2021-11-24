#input is a way to take terminal input and use it in our program
usr_input = input("> ") 

print(usr_input)

#take in a first anme and a last name
# then print the full name on a single line
f_name= input("first: ")
l_name= input("last: ")
print(f_name, l_name)


#write a basic add calculation that takes 2 number and returns the result
# int <some data> will try to turn it into a int data type str -> int
x = int(input("x:"))
y = int(input("y:"))
result = x + y
print(result)