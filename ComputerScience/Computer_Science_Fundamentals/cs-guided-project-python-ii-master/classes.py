# Animals
#  Cats, Dogs, Fish

class Animal:
    name = ''
    def __init__(self, kind, color):
        self.kind = kind
        self.color = color
    #    self.legs = legs

    def description(self):
        return f'This is a {self.kind}, and its color is {self.color}'



cat = Animal('cat', 'orange')
cat.name = 'Tabby'
Animal.name = 'Some name'
print(cat.name)
dog = Animal('dog', 'brown')
# dog.name = 'Rover'
print(dog.name)

print(cat.description())
print(dog.description())
