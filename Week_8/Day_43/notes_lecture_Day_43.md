Dec 7
# CSS

cascading style sheet
inline styling (css rules) is bad practice (not easily updated an dalso not good for performance) but supper useful for testing.
external style sheets are desired

## css normalize
to avoid explorer to use thier own styles default

Multi page vs single page

SPA lifecycle
initial request done then all that requested is returned is AJAX

boxes, rectangles, containers
<link rel= "" href="" type=">

## Selectors
tag
nesting 
class
id

## better naming
bem for naming conventions

* classes use dashes in EJS name in CSS use .name {
width: 50px;
color: grey;
}

*id dashes in EJS and in CSS use #
unique 

## cascade
bottom selector will take over the style if repeated and dif

## Specificity (wins over cascade!)
the more especific wins in this order
inline- ids -classes - inline

## Semantic tags
much more readable when workig with teams

article
header
section
main

# FrontEnd
HTML (content/structure), CSS (layout, look) and JS ()

# tweeter layout
form
  label
  textarea

div
  button
  output 140

tweets are cards

## other tips
<!-- comment -->

lorem ipsum to input dummy data

# Box Model
margin: space between other elements in your page
border
padding:space it is taking 

use BORDER BOX is preferred easier to use becaus eit includes margina nd padding

*{
  box-sizing: border-box;
}

# default properties

* block takes full width
BUT can be changed using

div-block{
display: in-line (specific height and )
}

* in-line span are the in-line elements (used for navigation methods)
cannot set height and width


* in-line block is the best 
because can modify height and width but also the responsiveness

* flex 
applied to the first child levels

alignment
can go vertical and horizontal
have to main axis -left to right
cross axis top-bottom
to be able to justify content
display: flex;
flex-direction: colum

}

flex box tricks
