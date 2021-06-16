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
