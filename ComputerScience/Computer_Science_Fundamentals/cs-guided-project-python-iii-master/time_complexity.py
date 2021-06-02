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
    print(last_idx) # O(1)

    for item in items: # O(n)
        print(item) # O(1)
        print(item) # O(1)
        # both print statements ends up O(2) but with big O,
        # you drop the constant giving O(1)

        # run time is O(n) * O(1) = O(n)

    for item in items: # loop runs O(n) times
        for item in items: # another loops run O(n)
            print(item, item) # O(1)

        # Together, O(n)* O(n) = O(n^2) = Quardratic


    middle_idx = len(items) / 2 # O(1)
    idx = 0 # O(1)

    while idx < middle_idx: # O(n/2)
        print("something") #O(1)
        idx = idx + 1 # O(1)

    # this function has 4 O(1)
    # O(n^2) + O(n) + O(4) + O(n)  ==> O(n^2)
