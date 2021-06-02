# Constant O(1)- takes one step.
def print_one_item(items):
    print(item[0])


# Linear O(n) - goes through every item once
def print_every_item(items):
    for item in items:
        print(item)

# Exponential - Quardratic O(n^2)
def print_pairs(items):
    for item_one in items:
        for item_two in items:
            print(item_one, item_one)


def do_a_bunch_of_stuff(items):
    last_idx = len(item) - 1; # O(1) 
