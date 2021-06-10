/**
Tournament Winner

There's an algorithms tournament thaking place in which teams of programmers compete against each other to solve algorithmic problems as fast as possible. Teams compete in a round robin, where each team faces of against all other teams. Only two teams complete against each other at a time, and for each competition, one team is assigned the home team, while the other team is the away team. In each competition, there's always one winner and one loser; there are no ties. A team receives 3 points if it wins and 0 points if it loses. The winner of the tournament is the team that receives the most amount of points.

Given an array of pairs representing the teams that have competed against each other and an array containing the results of each competition, write a function that returns the winner of the tournament. The input arrays are named competitions and results respectively. The competitions array has elements in the form [homeTeam, awayTeam], where each team is a string of at most 30 characters representing the name of the team. The results array contains information about the winner of each correstpoinding competition in the competitions array. Specifically results[i] denotes the winner of competitions[i] , where 1 in the reuslts array means that the home team in the corresponding competition won and a 0 means the away team won.

Only one team will win the tournament and each tournament will always have at least two teams.

Samples:

{
  "competitions": [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
  ],
  "results": [0,0,1]
}

Output: Python

**/
// note: [ homeTeam, awayTeam]
// 0 = away team won
// 1 = home team won
function tournamentWinner(competitions, results){
  let compObj = {}
  // This creates a hashmap like "Python": 6, "HTML": 3 which is a point basis
  for (let i = 0; i < competitions.length; i++){
    if (results[i] == 0){ // This denotes that away team won
      let awayWinner = competitions[i][1] // 1 index points to away team.
      if (compObj[awayWinner] === undefined){
        compObj[awayWinner] = 3
      } else {
        compObj[awayWinner]++
      }
    } else {
      let homeWinner = competitions[i][0] // 0 index points to home team
        if (compObj[homeWinner] == undefined){
          compObj[homeWinner] = 3
        } else {
          compObj[homeWinner]++
        }
    }
  }

  let max = 0;
  let winner;
  for (const[key, value] of Object.entries(compObj)){
    if (value > max){
      max = value;
      winner = key;
    }
  }
  return winner;
}


let competitionList = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"]
]

let resultList = [0,0,1]

console.log(tournamentWinner(competitionList, resultList))
