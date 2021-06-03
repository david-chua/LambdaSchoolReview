# Describe the difference between an in-place algorithm and out-of-place algorithm


def in_place_double(arr):
    for i in range(len(arr)):
        arr[i] = arr[i]*2

    return arr

def out_of_place(arr):
    new_arr = []
    for i in range(len(arr)):
        new_arr.append(arr[i]*2)

    return new_arr


arr_1 = [1,2,3,4,5]

# arr_2 = in_place_double(arr_1)


# print(arr_2)
# print(arr_1)
# print(arr_2 is arr_1)


arr_3 = out_of_place(arr_1)
# print(arr_3)
# print(arr_1)
# print(arr_3 is arr_1)


def append_string(string):
    string = string + ' hurray!'
    return string

str_1 = 'Hip hip'

str_2 = append_string(str_1)

print(str_1)
print(str_2)
