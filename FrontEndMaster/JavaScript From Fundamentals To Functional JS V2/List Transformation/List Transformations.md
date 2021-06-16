# Nesting

```
const game = {};

game['suspects'] = [];

game.suspects.push({
  name: "rusty",
  color: "orange"
});

game.suspects[1] = {
  name: "Miss Scarlet",
  color: "red"
}

or


const game = {
  'suspects': [
    {
      name: "Rusty",
      color: "orange"
    },
    {
      name: "Miss Scarlet",
      color: "red"
    }
  ]
}


// looping

function foo(obj){
  for (let i = 0; i < obj.suspects.length; i++){
    console.log(obj.suspects[i])
  }
}


var gameLoop = function(){
  for (var i = 0; i < games.suspects.length; i++){
    console.log('outer loop')
    for (var key in games.suspects[i]){
      console.log('inner loop')
      if (game.suspects[i][key] === 'Rusty'){
          console.log('gottem');
      } else {
        console.log('next time');
      }
    }
  }
}


let suspects = [
    {
      name: "Rusty",
      color: "orange"
    },
    {
      name: "Miss Scarlet",
      color: "red"
    }
]

var [{color: firstColor}, {color: secondColor}] = suspects
