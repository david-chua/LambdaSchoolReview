# _.map() and .map()

```
_.map([1,2,3], function(v,i,list){console.log(v)});
```

* produces a new array of values by mapping each value in list through a transformation function (iterator);

* Each invocation of iterator is called with three arguments: (elements, index, list). If this list is a JavaScript object, iterator's argument will be (value, key, list).

* .each does not return


## _.map() usage

```
const weapons = ['candlestick', 'lead pipe', 'revolver'];

const makeBroken = function(item){
  return `broken ${item}`
}

const brokenWeapons = _.map(weapons, makeBroken);

brokenWeapons;
/**
[
  'broken candlestick',
  'broken lead pipe',
  'broken revolver'
]
**/
```


## _.map vs _.each


```
function CreateSuspectObjects(name){
  return {
    name: name,
    color: name.split(' ')[1],
    speak() { console.log(`my name is ${this.name}`); }
  };
};

var suspects = ['Miss Scarlet', 'Colonel Mustard'];

var suspectsList = _.map(suspects, function(name){
  return CreateSuspectObjects(name);
});


_.each(suspects, function(suspect){
  suspect.speak();
});
```

## .map() solution

```
_.map = function(list, callback){
  // create an empty array to store
  var storage = [];
  // looping
  for (var i = 0; i < list.length; i++){
    // callback(element)
    // push
    storage.push(callback(list[i], i, list));
  }

  // return []
  return storage;
}


_.map([1,2,3], function(val) {return val + 1})
// [2,3,4]  
