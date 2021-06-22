let x = 0

let returnTrue = function(){
  console.log("true is returned")
}

let myPromise = new Promise((res, err) => {
  if (x == 0){
    res("True is returned");
  } else {
    err("error");
  }
})



myPromise.then(
  result => console.log('result');
)
