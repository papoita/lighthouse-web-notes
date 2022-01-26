<!-- @format -->

Jan 25, 2022

# trees

can work with trees
can implement simple, non-recursive tree traversal functions

# tree traversal Org charts

can explain what tree traversal is
can explain the difference between breadth first and depth first search
can use depth first search to search for an object in a tree

## how to traverse the tree

### Breadth first traversal

check the nodes closest to the root node, before checking the nodes that are farther away. row by row top to bottom

### Depth first traversal.

goes down each path and never crosses a node

```
class Node {

  constructor(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
  }

  depthFirstTraversal() {

    console.log(this); // 1

    for (const childNode of this.children) {
      childNode.depthFirstTraversal(); // 2
    }
  }
}
```

# links

https://www.youtube.com/watch?v=9RHO6jU--GU&index=32&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&ab_channel=mycodeschool
