



// while loop
var romanToInt = function(s){
  let roman = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }

  let total = 0;
  let firstPointer = 0;
  let secondPointer = 1;

  while (firstPointer < s.length){
    let currentInt = roman[s.charAt(firstPointer)];
    let nextInt = roman[s.charAt(secondPointer)];

    if(nextInt){
        if (currentInt >= nextInt){
            total += currentInt;
            firstPointer++
            secondPointer++
        } else {
            total += (nextInt-currentInt);
            firstPointer += 2
            secondPointer += 2
        }
    } else {
      total += currentInt
      firstPointer++
    }
  }
  return total;
}

// For loop
var romanToInt = function(s) {
    let roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let total = 0;

    for (let i = 0; i< s.length; i++){
        let currentInt = roman[s.charAt(i)];
        let nextInt = roman[s.charAt(i+1)];

        if(nextInt){
            if (currentInt >= nextInt){
                total += currentInt;
            } else {
                total += (nextInt - currentInt);
                i++
            }
        } else {
            total += curr
        }

    }



  return total;
};
