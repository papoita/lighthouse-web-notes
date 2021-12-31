<!-- @format -->

Dec 29, 30 2021

# Flexbox

Parent element (flex container)
Child Element (flex items)

efficient layout, align and distribute space
alter width, height, size and dynamic

direction agnostic
based on flex-flow directions

# Properties
https://css-tricks.com/snippets/css/a-guide-to-flexbox/#order
## display 
inline or block
## order 
## flex-direction 
row, row reverse or column, column-reverse
## flex-grow
set to 1 default (after is ratio to that size) if set to 2 it would be twice as big
## flex-wrap
nowrap (default all items in one line)
wrap (multiple lines)
wrap-reverse: multiple lines form bottom to top
## flex shrink
3
## flex-basis
defines default size of an element
If set to 0, the extra space around content isn’t factored in. If set to auto, the extra space is distributed based on its flex-grow
## flex flow
column wrap
## justify-content
flex-start
flex-end
center
space-between
space-around
space-evenly
## align-self
auto
flex-start
flex-end
center
baseline
stretch
## align-items

## align-content

## gap, row-gap, column-gap
gap controls spaces between flex items not outer edges

# Terminology
## main axis – 
The main axis of a flex container is the primary axis along which flex items are laid out. Beware, it is not necessarily horizontal; it depends on the flex-direction property (see below).
## main-start | main-end – 
The flex items are placed within the container starting from main-start and going to main-end.
## main size – 
A flex item’s width or height, whichever is in the main dimension, is the item’s main size. The flex item’s main size property is either the ‘width’ or ‘height’ property, whichever is in the main dimension.
## cross axis – 
The axis perpendicular to the main axis is called the cross axis. Its direction depends on the main axis direction.
## cross-start | cross-end – 
Flex lines are filled with items and placed into the container starting on the cross-start side of the flex container and going toward the cross-end side.
## cross size – 
The width or height of a flex item, whichever is in the cross dimension, is the item’s cross size. The cross size property is whichever of ‘width’ or ‘height’ that is in the cross dimension

# Examples
```
.parent {
  display: flex;
  height: 300px; /* Or whatever */
}

.child {
  width: 100px;  /* Or whatever */
  height: 100px; /* Or whatever */
  margin: auto;  /* Magic! */
}

.flex-container {
  /* We first create a flex layout context */
  display: flex;

  /* Then we define the flow direction 
     and if we allow the items to wrap 
   * Remember this is the same as:
   * flex-direction: row;
   * flex-wrap: wrap;
   */
  flex-flow: row wrap;

  /* Then we define how is distributed the remaining space */
  justify-content: space-around;
}
```

### medium screens 
max-width: 800px;

### small screens 
max-width: 5
00px;

/* We rely on source order for mobile-first approach
 * in this case:
 * 1. header
 * 2. article
 * 3. aside 1
 * 4. aside 2
 * 5. footer
 */

 ## example with header and footer

 .wrapper {
  display: flex;
  flex-flow: row wrap;
}

/* We tell all items to be 100% width, via flex-basis */
.wrapper > * {
  flex: 1 100%;
}

/* We rely on source order for mobile-first approach
 * in this case:
 * 1. header
 * 2. article
 * 3. aside 1
 * 4. aside 2
 * 5. footer
 */

/* Medium screens */
@media all and (min-width: 600px) {
  /* We tell both sidebars to share a row */
  .aside { flex: 1 auto; }
}

/* Large screens */
@media all and (min-width: 800px) {
  /* We invert order of first sidebar and main
   * And tell the main element to take twice as much width as the other two sidebars 
   */
  .main { flex: 2 0px; }
  .aside-1 { order: 1; }
  .main    { order: 2; }
  .aside-2 { order: 3; }
  .footer  { order: 4; }
}