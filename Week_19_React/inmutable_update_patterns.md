March 15, 2022

-state of a component is stoeed in an object
* immutable update patterns

# copying an object
```jsx
const original = { one: 1 };
const bad = original;
const good = { ...original };

console.log(original === original); // true
console.log(original === bad); // true
console.log(original === good); // false
```
## copying 2 levels
```jsx
const original = { one: 1, sub: { two: 2 } };
const copy = { ...original, sub: { ...original.sub } };

console.log(original === copy); // false
console.log(original.sub === copy.sub); // false
```
Avoid nesting

# adding to an object
```jsx
const original = { one: 1 };
const copy = { ...original, two: 2 };

console.log(original === copy); // false

/* original */
{
  one: 1
}

/* copy */
{
  one: 1,
  two: 2
}
```

# updating an obj
```jsx
const original = { one: 1, two: 3 };
const copy = { ...original, two: 2 };

console.log(original === copy); // false

/* original */
{
  one: 1,
  two: 3
}

/* copy */
{
  one: 1,
  two: 2
} 

```
# merging 2 objs
```jsx
const copy = { ...first, ...second };

console.log(copy === copy); // true
console.log(first === copy); // false
console.log(second === copy); // false

/* first */
{
  one: 1
}

/* second */
{
  two: 2
}

/* copy */
{
  one: 1,
  two: 2
}
```

