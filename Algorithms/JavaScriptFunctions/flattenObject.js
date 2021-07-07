let testObj = {
    Company: "GeeksforGeeks",
    Address: "Noida",
    contact: +91-999999999,
    mentor: {
        HTML: "GFG",
        CSS: "GFG",
        JavaScript: "GFG"
    }
};


const flattenObj = function(obj){
  let result = {};

  for (const i in obj){
    if((typeof obj[i]) === 'object') {
      const temp = flattenObj(obj[i]);
      for (const j in temp){
        result[i + '.' + j] = temp[j];
      }
    } else {
      result[i] = obj[i];
    }
  }
  return result;
}


console.log(flattenObj(testObj))
