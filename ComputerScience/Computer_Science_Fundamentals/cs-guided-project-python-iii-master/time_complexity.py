
# Linear - goes through every item once
def print_every_item(items):
    for item in items:
        print(item)

# Exponential 
def print_pairs(items):
    for item_one in items:
        for item_two in items:
            print(item_one, item_one)
