# Reduce - returns one item.


_.reduce([1,2], function(sum, n) {
  return sum + n
}, 0);
  // => 3


_.reduce({ 'a': 1, 'b': 2, 'c': 1}, function(result, value, key){
    (result[value] || (result[value] = [])).push(key);
    return result
}, {});
  // => { '1': ['a', 'c'], '2': ['b'] }


## Impelementation

var reduce = function(list, cb, initial = list[0]) {
  let memo = initial;

  // loop through list
  for (let i = 0; i < list.length; i++){
    if ( i === 0 && memo === undefined){
      memo = list[0]
    } else {
      memo = cb(list[i], memo)
    }
  }
  // return result
  return memo
}  

reduce([1,2,3], (v,sum) => v + sum);
