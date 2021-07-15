let numberToWords = function(num){
  let zeroes = [1000000000, 1000000, 1000, 1]
  let delimiters = [' Billions', ' Millions', ' Thousand', '']
  let teens = {
    '0': 'Ten',
    '1': 'Eleven',
    '2': 'Twelve',
    '3': 'Thirteen',
    '4': 'Fourteen',
    '5': 'Fifteen',
    '6': 'Sixteen',
    '7': 'Seventeen',
    '8': 'Eighteen',
    '9': 'Nineteen'
  };

  let tens = {
    '2': 'Twenty',
    '3': 'Thirty',
    '4': 'Forty',
    '5': 'Fifty',
    '6': 'Sixty',
    '7': 'Seventy',
    '8': 'Eighty',
    '9': 'Ninety'
  }

  let ones = {
    '0': '',
    '1': 'One',
    '2': 'Two',
    '3': 'Three',
    '4': 'Four',
    '5': 'Five',
    '6': 'Six',
    '7': 'Seven',
    '8': 'Eight',
    '9': 'Nine'
  }

  let output = '';
  let i = 0;
  while ( i < zeroes.length){

    // get digits before Billions, Millions, Thousand
    let beforeDelimiter = Math.floor(num/ zeroes[i])
    if (beforeDelimiter === 0){
      i++;
      continue;
    }

    // break the digits into hundreds and tens
    let hundred = Math.floor(beforeDelimiter/100);
    let ten = beforeDelimiter % 100;
    let tempString = ''

    // map the hundred to string
    if (hundred > 0){
      if (hundred === 1){
        tempString += 'One Hundred'
      } else {
        tempString += ones[ hundred.toString() ] + ' Hundred';
      }
    }

    // map the rest to string
    // 20 - 99
    if (ten > 19){
      tempString = tempString ? tempString + ' ' : tempString;
      tempString += tens[ ten.toString()[0] ]

      if (ones[ ten.toString()[1] ]){
        tempString += ' ' + ones[ ten.toString()[1] ]
      }
    } else {
      // 0 - 9
      if (ten < 10){
        if (ones[ ten.toString()[0] ]){
          tempString = tempString ? tempString + ' ' : tempString
          tempString += ones[ ten.toString()[0] ]
          }
        } else {
          // 10 - 19
          if (teens[ ten.toString()[1] ]){
            tempString = tempString ? tempString + ' ' : tempString;
            tempString += teens[ ten.toString()[0] ]
          }
        }
      }

      tempString += delimiters[i];
      output = output ? output + ' ' + tempString : output + tempString

      num = num % zeroes[i]
      i++
    }
    if (!output) { return 'Zero'}
    return output
}


console.log(numberToWords(123))
