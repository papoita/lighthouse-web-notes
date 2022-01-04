January 2, 2021
https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns    

mostly fluid, column drop, layout shifter, tiny tweaks, and off canvas

A “fluid” layout is one that stretches and shrinks to fill the width of the screen.
A “fixed-width” layout is the opposite: it has the same width regardless of the screen dimensions.
# fluid vs fixed
fluid tablet min-width: 768px;
fixed desktop min-width: 1024px;
## mobile layout media queries
create the mobile layout styles and used media queries to build tablet and desktop layouts on top of a shared set of base styles
## disable zoom in mobile devices
disabled the default viewport zoom behavior of mobile browsers.
add to <head> in every webpage

<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />


tutorial from https://www.internetingishard.com/

# css code to layout shifter
````
.container {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;
}

.c1, .c2, .c3, .c4 {
  width: 100%;
}

@media (min-width: 600px) {
  .c1 {
    width: 25%;
  }

  .c4 {
    width: 75%;
  }

}

@media (min-width: 800px) {
  .container {
    width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
}
````
