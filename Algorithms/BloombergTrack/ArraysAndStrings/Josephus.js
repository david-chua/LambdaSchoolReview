
/**
Steps:
N - number of people
M - who dies after certain count

create a new man Array.


**/
const joseph = function (N, M) {
    var man = new Array()
    for (var i = 0; i < N; i++)
        man[i] = 0
    var count = 1
    var i = 0, pos = - 1
    while (count <= N) {
        do {
            pos = (pos + 1) % N // Ring
            if (man[pos] == 0)
                i++
            if (i == M) {
                i = 0
                break
            }
        } while (true)
        man[pos] = count
        count++
    }
    return man
}



console.log(joseph(11,3))

/**
time: O()
space: O(n)
**/
const findTheWinner = function(n, k) {
// Build queue
    let que = []
    for(let i = 1; i <= n;i++){
        que.push(i)
    }

    while(que.length > 1){
		    let deleteCount = k-1
		    while(deleteCount > 0){
				      que.push(que.shift())    //Rotate Elements
				      deleteCount--
			  }
        que.shift()                    // Delete kth element
    }
    return que.shift()
};


console.log(findTheWinner(7,2));

/**
Time complexity: O(n)
parameters: number of people and number to skip
recursive solution
base case: 1 person alive
after killing 1 person, there are n-1 people left.
But the position returned by josephu(n-1,k) will consider position
starting from k % n+1. So we must make the adjustment to the position
returned by josephus(n-1,k);
**/



let josephus = function(n,k){
  if (n == 1){
    return 1
  }
  else {
    return (josephus(n-1,k) + k-1) % n+1
  }
}

console.log(josephus(7,2));
