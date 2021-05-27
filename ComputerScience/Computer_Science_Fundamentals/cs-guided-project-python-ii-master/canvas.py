class Animal:
    name = ""
    kind = ""
    color = ""

    def description(self):
        return "%s is a %s %s." % (self.name, self.color, self.kind)


cat = Animal()
cat.name = "Purrfect"
cat.kind = 'cat'
cat.color = 'brown'
dog = Animal()

print(cat.description())
