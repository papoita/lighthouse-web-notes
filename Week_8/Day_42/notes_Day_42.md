Dec 6, 2021


# client side web technology

HTML, CSS  and JS

project tweeter, render and in browser interface and interact with a JSOn API
client: sinlge page application has all functionality there and communicates asynchronously with server

DOM is constructed from the HTML code and styled by css 
## HTML

html tags creates an element in the tree DOM 

class is an atrtibute


<html> - represents the root of an HTML document
<head> - provides general information (metadata) about the document
<title> - defines the title of the document, shown in a browser's title bar
<link> - specifies relationships between the current document and an external resource
<body> - represents the content of an HTML document
<h1>, <h2>, ... Heading elements implement six levels of document headings
<p> - represents a paragraph of text
<div> - Division Element, generic container for flow content
<ol>, <ul> list of items with, or without numerical ordering
<li> - represents an item in a list
<a> - anchor element; defines a hyperlink to a location or page on the Web
<table> - display a data table. Note: not to be used for layout
<tr> - a table row
<td> - a cell in a table row

## CSS
1. Directly to an element. For example: <p style="color: red"></p>

2. Inline with HTML using a <style> tag. <style> tags usually go inside the <head> tag. An example is: <style> p { color: red; } </style>

3. Linking to a CSS file using a <link> tag. Here is an example of that tag: <link rel="stylesheet" href="style.css">

## ID vs classes

ID: uniquely identify # (anchor hash value or page fragment)
  ie. https://yourdomain.com#comments
  is also more performant 
  only 0-1 found
Class: generally classify .
 more modular clean and sustainable code
 many found

## DOM

Document Object Model
browser runs the DOM porcess
each html element is called a node

### View and change CSS

### Inspect tools
Brakpoint in inspect use to find the bug are preferred over conosole.log 
- in inspect you dont;e need to understand how the code is structured
- devTools show the variables at that moment in time you dont have to explicilty define what you wan to inspect

debugger;
equivalen to line of code breakpoint, except that it is set in the code and not in DEvtools UI

#### more
(demo)[https://developer.chrome.com/docs/devtools/javascript/reference/#stepping]

 continue to here with right click to get a specific line of code to run
 step over : move over each functiion
 step into eachline inside the function
 step out leave the function

 local scope can give you access to values of variables at that specific point in time

call stack allows for async and sunc code

snippets 

watch expressions

# Event driven arquitecture EDA

When X happens, then do Y.

Where X is the event, and Y is the event handler. Perhaps Event X is the click of a button, and Handler Y turns on a lightbulb.

asynchronous programming

client side: DOM (onClick, onFocus, onLoad)
library jQuery


server side:
node.js incoming request as an event with a callback function

Node.js core API provides EventEmitter class (base for event driven patterns)

# Event propagation

Since DOM elements are nested within other elements, in a tree-like structure, events that affects a child element bubble up through its parents.


event.currentTarget vs event.Target

event.stopPropagation() -> to avoid propagation to aprents

# Capturing
Capturing phase – the event goes down to the element.
Target phase – the event reached the target element.
Bubbling phase – the event bubbles up from the element.
There are two possible values of the capture option:

If it’s false (default), then the handler is set on the bubbling phase.
If it’s true, then the handler is set on the capturing phase.

````
addEventListener(event, handler)


elem.addEventListener(..., {capture: true})
// or, just "true" is an alias to {capture: true}
elem.addEventListener(..., true)
````
