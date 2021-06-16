/**
Given a series of child-parent relations like
[
  ['dog', 'mammal'],
  ['shark', 'fish'],
  ['cat', 'mammal'],
  ['mammal', 'animal'],
  ['fish', 'animal']
]

capture the relationship of this entities so you can print the relationships in a nested format at any point.

Notes:
- Siblings may be returned in any order.
- Your add function will be called multiple times to add relationships.


Example Outputs:

animal
  fish
    shark
  mammal
    dog
    cat

Output 2:

{
  "value": "animal",
  "children": [
    {
      "value": "fish",
      "children": [
        {
          "value": "shark",
          "children":[]
        }
      ]
    },
    {
      "value": "mammal",
      "children": [
        {
          "value": "dog",
          "children": []
        },
        {
          "value": "cat",
          "children": []
        }
      ]
    }
  ]
}


Option 3:
{
  "animal":{
    "fish": {
      "shark": {}
    },
    "mammal": {
      "cat": {},
      "dog": {}
    }
  }
}

**/

let data = [
  ['dog', 'mammal'],
  ['shark', 'fish'],
  ['cat', 'mammal'],
  ['mammal', 'animal'],
  ['fish', 'animal']
]

let createObj = function(arr){
  const obj = {}

  for (let i = 0; i < arr.length; i++){
    let [child, parent] = arr[i];
    if (!obj[parent]) obj[parent] = {};

    if (obj[child]){
      obj[parent][child] = obj[child]
      delete obj[child]
    } else {
      obj[parent][child] = {};
    }
  }

  function helper(o) {
      for (const key in o) {
        // console.log('key', key, 'o', o)
          if (key in obj) {
              Object.assign(o[key], obj[key]);
              delete obj[key];
              helper(o[key]);
          }
      }
  }


  Object.keys(obj).forEach(item => {
    helper(obj[item])
  });
  return obj
}




console.log(createObj(data))

const array = [["dog", "mammal"],
["shark", "fish"],
["cat", "mammal"],
["mammal", "animal"],
["fish", "animal"],
["whitecat","cat"],
["sheep","mammal"],
["sparrow","bird"],
["blacksheep","sheep"]];

console.log(createObj(array))
