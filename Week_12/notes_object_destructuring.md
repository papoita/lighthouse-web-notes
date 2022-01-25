<!-- @format -->

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

object[key] object at key will equal the value
const data = JSON.parse(body);

    const {users} = data;
    for (const username in users){
      const {wins, losses} =  users[username];
      console.log(wins);
      console.log(username);
      console.log(losses);

{
"users": {
"mr_robot": {
"wins": 5,
"losses": 2
},
"teddy_b": {
"wins": 0,
"losses": 3
}
}
}
