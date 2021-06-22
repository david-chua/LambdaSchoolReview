# List Transformation

```
function CreateSuspectObjects(name){
  return {
    name: name,
    color: name.split(' ')[1],
    speak(){
      console.log('my name is ', name);
    }
  }
}

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White', ...];

var suspectList = [];

<!-- CreateSuspectObjects(suspects[0]) -->

for (var i = 0; i < suspects.length; i++){
  suspectList.push(CreateSuspectObjects(suspects[i]));
}
```


## Looping with _.each

```
function CreateSuspectObjects(name){
  return {
    name: name,
    color: name.split(' ')[1],
    speak(){
      console.log('my name is ', name);
    }
  }
}

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

var suspectList = [];

_.each(suspects, function(name){
  let suspectObj = CreateSuspectObjects(name);
  suspectsList.push(suspectObj);
  })
```


Exercise:

Complete the rest of this function so that it works as described in the previous slides:

```
_.each = function(list, callback){
  //... TODO
}
```

```
// Solution:
const _ = {};

_.each = function(list, callback){
  //
  if (Array.isArray(list)){
      // loop through the list
      for (let i = 0; i < list.length; i++){
        // call the callback with a list item
        callback(list[i], i, list);
      }
  } else {
    // loop through object

  }
}

_.each(['salty', 'georgie', 'porgie'], function(name, i){
    if (list[i+1]){
      console.log(name, 'is younger than', list[i+1])
    } else{
      console.log(name, 'is the oldest')
    }  
})
