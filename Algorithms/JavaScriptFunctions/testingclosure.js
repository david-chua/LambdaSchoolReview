const firstFunc = function(){
  console.log('hello first func')
  let count = 0;
  let secondFunc =  function(){
    count++
    console.log(count)
    return `the current count is ${count}`
  }

  return secondFunc
}


const thirdFunc = firstFunc()


console.log(thirdFunc());
console.log(thirdFunc())
