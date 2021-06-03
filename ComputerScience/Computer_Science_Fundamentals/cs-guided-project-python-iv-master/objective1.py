arr_1 = ['a', 'b', 'c']

some_num = 6

arr_2 = arr_1

arr_3 = arr_1.copy()

arr_4 = ['a', 'b', 'c']

# print(arr_1 is arr_2)
# print(arr_1 is arr_3)
#
# print(id(arr_1))
# print(id(arr_2))

arr_2.append('d')

# print(arr_1)
# print(arr_2)
# print(arr_3)


some_dict = {
    'a': 1
}

some_other_dict = some_dict

some_dict['b'] = 2

# print(some_other_dict['b'])


int_1 = 1

int_2 = int_1

# print(int_2 is int_1)

int_2 = 100000

# print(int_1)
# print(int_2 is int_1)

str_1 = "Hello World!"

str_2 = str_1

str_2 = 'Something else'

print(str_1)


str_1 = 'Some text'
print(id(str_1))

str_1 = 'Completely new thing'

print(id(str_1))
