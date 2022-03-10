# Heartbreaking project

https://codesandbox.io/s/heartbreaking-forked-639bbj?file=/src/index.js

```jsx
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

import Broken from "./components/Broken";
import Fixed from "./components/Fixed";

function Application() {
  const [likes, setLikes] = useState(2);

  useEffect(() => {
    console.log(`likes count ${likes}`);
  }, [likes]);

  return (
    <div onClick={() => setLikes(likes + 1)}>
      {likes > 0 ? <Fixed>{likes}</Fixed> : <Broken />}
    </div>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));

```

# to alter color when clicks

```jsx
function Application() {
  const [likes, setLikes] = useState(2);

  useEffect(() => {
    console.log(`Likes count: ${likes}`);
    document.body.className = `bg--${likes % 2}`;
  }, [likes]);

  return (
    <div onClick={() => setLikes(likes + 1)}>
      {likes > 0 ? <Fixed>{likes}</Fixed> : <Broken />}
    </div>
  );
}
```
```css
.bg {
  &--0 { background-color: #ff6b81; }
  &--1 { background-color: #b71540; }
}
```
# setLikes with button

## what is prev
holds the value of the likes state BEFORE the setLikes was triggered by react. 

## with prev
### heartbreaking ex


```jsx
const [likes, setLikes] = useState(0);
return <button onClick={() => setLikes(prev => prev + 1)} />
```
### 
adding 5 example
https://codesandbox.io/s/eager-williamson-7irb6?file=/src/App.js:0-476
```jsx
import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [num, setNum] = useState(0);

  const addNum = () => {
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
  };

  return (
    <div className="App">
      <h1>GOOD BATCHING</h1>
      <h2>{num}</h2>
      <button onClick={addNum}>Add 5</button>
    </div>
  );
}
```

## without prev
bad batching
!

# SetTimeout


https://codesandbox.io/s/heartbreaking-forked-639bbj?file=/src/index.js
```jsx
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

import Broken from "./components/Broken";
import Fixed from "./components/Fixed";

function Application() {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    if (likes > 0) {
      console.log(`Likes count: ${likes}`);
      document.body.className = `bg--${likes % 2}`;
      const timeout = setTimeout(() => setLikes((prev) => prev - 1), 5000);
      // clears the timer set above
      return () => clearTimeout(timeout);
    }
  }, [likes]);

  return (
    <div onClick={() => setLikes(likes + 1)}>
      {likes > 0 ? <Fixed>{likes}</Fixed> : <Broken />}
    </div>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));
```

# CleanUp

Timers, event listeners and socket connections are examples of side effects that require cleanup

```jsx
return() => clearInterval(timeout);
```