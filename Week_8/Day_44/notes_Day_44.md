<!-- @format -->

Dec 8, 2021

# jQuery

dom events using jQuery library

jQuery object/constructor (and also the $ alias to jQuery) only utilizes a single global variable, and all of jQuery's functionality is packaged into that one object.

using on better than bind or click because they have the on internally and results in faster more consistent code

Event delegation happens due to event bubbling when an event is triggered. the delegating element should always be as close to the delegatees so the event doesn;t have tot ravel as much before its handler function is called. event delegation over binding

## prevent default

useful for AJAX requests ie. click a button to submit a fomr want to cancel the buttons default action (submit form's actiona ttribute)
event.preventDefault
or

prevent bubbling of an event up the DOM tree so elements arent notiied
event.stopPropagation

## original event usefull for debugging

event object contains a property called originalEvent that the browser created
event.originalEvent

```
$(window).width();

const element = document.getElementById("foo");
element.addEventListener("click", function() {
alert("Clicked!");
});

vs

$("#foo").on( "click", function() {
console.log("Foo element clicked");
});

or

$("#foo").click(function() {
console.log("Foo element clicked");
});
```

# Display

## Block

takes up the whole space can have width, height, margin,
headings (<h1>, <h2>, <h3>,<h4>,<h5>,<h6>)
div (<div>)
section (<section>)
footer (<footer>)
article (<article>)
paragraph (<p>)
lists (<ul>, <ol>)
nav (<nav>)
p (<p>)

## In line

take only necessary space

anchor (<a>)
em (<em>)
strong (<strong>)
span (<span>)

## inline- block

doesntcreate a new line but has margin, padding, tc

# flexbox (CSS flexible box)

responsive
.parent {
display: flex;
flex-direction: row; //column
justify-content:
align-items
flex-wrap:
align-content:
}

## parent properties

- Notice that when the flex direction is a column, justify-content changes to the vertical and align-items to the horizontal.

### justify-content (howirzontal)

flex-start: Items align to the left side of the container.
flex-end: Items align to the right side of the container.
center: Items align at the center of the container.
space-between: Items display with equal spacing between them.
space-around: Items display with equal spacing around them

### align-items (vertical)

flex-start: Items align to the top of the container.
flex-end: Items align to the bottom of the container.
center: Items align at the vertical center of the container.
baseline: Items display at the baseline of the container.
stretch: Items are stretched to fit the container.

### flex-direction

row: Items are placed the same as the text direction.
row-reverse: Items are placed opposite to the text direction.
column: Items are placed top to bottom.
column-reverse: Items are placed bottom to top.

## child properties

.yello{
order: 3;
}

### align-self

flex-start
flex-end
center
baseline
stretch (default)

order
align-self
flex-grow
flex-shrink

### flex-wrap

nowrap: Every item is fit to a single line.
wrap: Items wrap around to additional lines.
wrap-reverse: Items wrap around to additional lines in reverse.

### flex-flow

shorthand for flex-direction and flex-wrap
ie.
flex-flow: column wrap;

### align-content

flex-start: Lines are packed at the top of the container.
flex-end: Lines are packed at the bottom of the container.
center: Lines are packed at the vertical center of the container.
space-between: Lines display with equal spacing between them.
space-around: Lines display with equal spacing around them.
stretch: Lines are stretched to fit the container.
