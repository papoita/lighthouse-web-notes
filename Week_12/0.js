
//in put = {name: , name: , other: }
//output = []

// //for (const name in obj )
// const allPlayerNames = function(outcomes) {
//   // IMPLEMENT ME
//   const output = [];
//   for (const obj of outcomes){
//     //console.log(obj);
//     //console.log(obj.winner);
//     //console.log(obj.loser);
//     //console.log(obj.winner);
//     console.log(outcomes[0].winner);
//     for(const name in obj){
//       //console.log(obj.winner);
//       console.log(outcomes.winner);
//     }
//     //console.log(obj.key);
//     //console.log(outcomes[0]);
//     //console.log(outcomes[key]);
//     //output.push(obj[0].name);
//     //output.push(outcomes[name])
//   }
//   return output;
// };

// const allPlayerNames = function(outcomes) {
//   // IMPLEMENT ME
//   const output = [];
//   for (const obj of outcomes){
//     console.log(outcomes[0].winner);
//     console.log(outcomes[0].loser);
//   }
// }
const allPlayerNames = function(outcomes) {
  // IMPLEMENT ME
  const output = [];
  for (const obj of outcomes) {
    //console.log(obj);
    //console.log(obj.winner);
    
    output.push(obj.winner);
    output.push(obj.loser);

    //output.push(outcomes[name])
  }
  //console.log(output);
  const unique = [];
  for (const names of output ){
    if (!unique.includes(names))
    unique.push(names);
  }
  return unique;

};


const outcomes = 
[
  { winner: 'Alishah', loser: 'Bob',    loser_points: 3 },
  { winner: 'Maria',   loser: 'Xu Jin', loser_points: 1 },
  { winner: 'Elise',   loser: 'Bob',    loser_points: 2 },
  { winner: 'Elise',   loser: 'Maria',  loser_points: 4 },
  { winner: 'Alishah', loser: 'Maria',  loser_points: 2 },
  { winner: 'Maria',   loser: 'Xu Jin', loser_points: 3 },
  { winner: 'Xu Jin',  loser: 'Elise',  loser_points: 2 }
]
console.log (allPlayerNames(outcomes));