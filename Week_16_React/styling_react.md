Feb 27, 2022

* https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822

* https://blog.bitsrc.io/5-ways-to-style-react-components-in-2019-30f1ccc2b5b

1. CSS stylesheet: one for each component
2. inline styling
We can create a variable that stores style properties and then pass it to the element like style={nameOfvariable}
We can also pass the styling directly style={{color: 'pink'}}


```css
import React from 'react';

const divStyle = {
  margin: '40px',
  border: '5px solid pink'
};
const pStyle = {
  fontSize: '15px',
  textAlign: 'center'
};

const Box = () => (
  <div style={divStyle}>
    <p style={pStyle}>Get started with inline style</p>
  </div>
);

export default Box;
```
3. A CSS Module is a CSS file in which all class names and animation names are scoped locally by default

4. styled components
First we need to install styled-components library
npm install styled-components --save
Now we can create a variable by selecting a particular html element where we store our style keys const Div = styled.htmlElemnet`color: pink`
Then we use the name of our variable as a wrapper <Div></Div> kind of react component:)
Tips to use emoji icons key shortcut CTRL+CMD+SPACE 💡

* So what’s the difference between CSS-in-JS and Inline styles? let’s take it to the ground level. Here’s a simple explanation that makes things clearer at the most down-to-earth level possible: CSS-in-JS attaches a <style> tag on top of the DOM while inline styles just attaches the properties to the DOM node.

* In React, CSS-in-JS lets you think and design styles in abstraction in the component level, leveraging the principles of modularity and isolation, unit-testing, DRY principle and so on. It’s a mind-bender, but often a practical one.