# _.filter()

We are going to want to filter by those who were present but first we need to write our filter function

_.filter(arr, callback){
  ...// TODO
}

Solution:

const _ = {}


_.filter = function(arr, cb){
  // create a new array
  const storage = [];
  // loop through array
  for (let i = 0; i < arr.length; i++){
    // check if cb returns true
    if (cb(arr[i], i, arr) === true){
      // push if true
      storage.push(arr[i]);
    }
  }  
  // return arr
  return storage;
}


// Using .each
_.filter = function(arr, cb){
  // create a new array
  const storage = [];
  // loop through array
  _.each(arr, function(item, i, list){
    // check if cb returns true
    if (cb(item, i, list) === true){
      // push if true
      storage.push(item);
    }
  })  
  // return arr
  return storage;
}




_.filter(videoData, function(suspectObject){
    return suspectObject.present;
})
