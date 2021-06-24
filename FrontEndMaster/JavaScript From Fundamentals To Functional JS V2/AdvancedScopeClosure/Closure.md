const myAlert = () => {
  const x = "Help! I think I found a clue!";
  const alerter = (){
    alert(x);
  };

  alerter();
};

alert();


// Second Example
const myAlert = () => {
  const x = "Help! I think I found a clue!";
  const alerter = (){
    alert(x);
  };

  setTimeout(alerter,1000);
  console.log('what happens first? this log or the alert?')
};

alert();


// third Example:

const myAlert = () => {
  const x = "Help! I think I found a clue!";
  let count = 0;
  const alerter = ()=>{
    alert(`${x} ${++count}`);
  };

  alerter();
};

const funcAlert = myAlert();
const funcAlert2 = myAlert();

funcAlert();



// Fourth Example

const newClue = (name) => {
  const length = name.length;

  return (weapon) => {
    let clue = length + weapon.length;
    return !!(clue % 1);
  };
}

Closure - scope isolation

Putting a function inside of a function
Takes advantage by returning a function that retains access to its parent function even after it has been executed.


// Gotcha

const findSomeone = () => {
  const speak = () => {
    console.log(who);
  };

  let who = 'Why hello there, Prof Plum!';

  return speak;
};

const someoneSpeak = findSomeone()

someoneSpeak
// ->
() => {
  console.log(who);
}

someoneSpeak()
// -> Why ehllo there, Prof Plum!


const makeTimer = () => {
  let elapse = 0;

  const stopwatch = () => {return elapsed; };

  const increase = () => elapsed++;

  setInterval(increase, 1000);

  return stopwatch;
};


let timer = makeTimer();

timer // -> () => {return elapsed;}

timer() // -> 54

timer() // -> 93
