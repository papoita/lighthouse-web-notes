* npx create-react-app tourney-matches

* It is about managing small tournaments

* goal of passing down props.children

* player data object of objects for easier update

```
{
    "Disguised Lizard": {
      gamerTag: "Disguised Lizard",
      firstName: "Daria ",
      lastName: "Stark",
    },
    "DrSpiteful": {
      gamerTag: "DrSpiteful",
      firstName: "Terrell",
      lastName: "Hunter",
    }
} 
```

* Match data array of objects, need to add new object but not update info a completed match

```
 [
    {
      matchNumber: 1,
      players: ["Disguised Lizard", "DrSpiteful"],
      winner: "DrSpiteful",
      scoreDifference: 1
    },
    {
      matchNumber: 2,
      players: ["Henrikarex", "Gamerhorse"],
      winner: "Henrikarex",
      scoreDifference: 2
    },
 ]
 ```
 * mass update: (i.e. it targets the whole data set, not just one specific record). When performing this type of update, we don't know which matches we'll need to edit, and so we are forced to read every record to see if the gamer tag exists in that match

* components
Match, Player, MatchList, PlayerList

* lists in react: a list is displayed by creating one component that serves as the list container and another component that is used to create items in the list
playerlist and match list are the containers

* To turn an object containing other objects into an array, the Object.values() method works well.
```
// our object containing a group of objects
const playerData = { 
  "Disguised Lizard": { gamerTag: "Disguised Lizard", firstName: "Daria ", lastName: "Stark"},
  // more players below
  ...
}
```
const playerDataArray = Object.values(playerData);

* extracting # of wins: we know that the gamerTag of a player object is the same value used to record the winner in each match object.

Knowing this, we could iterate over the array of matches for each player and count how many times their gamerTag shows up in the winner property of a match. Once we calculate this, we can add it as a property on the player object and then return a new array with updated players.

* mock data : is not coming from a live source

* passing data <PlayerList> and <MatchList> components, we need to pass it down to their respective child components.

* 2 ways to pass props:

1. names prop inside the component

```
<Profile firstName="Amy" lastName="Mansel" avatar="/profile-hex.png" />
```
2. The second way uses the spread operator {...}:

```
const user = {firstName: "Amy", lastName: "Mansel", avatar: "/profile-hex.png"};
<Profile {...user} />
```
* conditional rendering allows only ternary operator

```
function Hello(props) { 

  return (props.yourName ? <h1>Hello, {props.yourName}.</h1> : <h1>Sorry, you don't seem to have a name.</h1>);
}
```

* passing down data
learned how to pass down data through several components (App to MatchList to Match and from App to <PlayerList> to Player). We will now learn how to use the arrays of matches and players to show the entire list of Match and Player components.

* Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity