class Taco ():
    def __init__(self,meat,toppings):
        self.meat=meat
        self.toppings=toppings


    def Hello(self):
        print ("Welcome to the Double Taco")
        print(self.toppings+"'s what would you like on your taco")


myTaco = Taco("Customer", "Steak")


print(myTaco.toppings)
print(myTaco.meat)
myTaco . Hello()