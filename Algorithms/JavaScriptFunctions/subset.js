

let subset = function(s){
  let longest = ""
  for (let i = 0; i < s.length; i++){
    let str = s[i]
    for (let j = i+1; j < s.length; j++){
      str += s[j]
      console.log(str)
    }
  }
}


console.log(subset("run"))
