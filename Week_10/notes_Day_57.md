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