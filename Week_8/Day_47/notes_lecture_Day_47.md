Dec 11, 2021

js created as a browser based (client) language

nodeJS: created by Ryan Dahl in 2009 to run server based applications

mobile (react-native)
desktop(ElectroJS)

Browser Object Model: hierarchy of browser based on an object with parent and child

process.argv only works in terminal and not in browser
instead it comes from the window object
 It is importatnt to be aware what type of env you are working on
 
 window
    location.href
    navigator.userAgent
    document
    screen
    history
    event
    frames

geolocation api


### document.getElementById(idSelector)
### ByTagName(tagName)
### ByName(name)
### ByClassName(classSelector)

### document.querySelector(selector)
ie.("#score") class selector
("p") tag selector just the first
("")

### document.querySelectorAll()
("p") tag selector all of the p's

# demos
live-server extension to open the page in the web browser
CRUD operations

1. create a js file
2. include in index.html
 using <script src= "relativepathoffilewith termination"></script>
 include a console.log to make sure in inspector tools that it is working
 3. use js to capture information from form input (get the handle element) 
  targer=t the form (get the handle element)
  target the text box inside the form
  get the value form

  capture click on the add todo button

  create new LI programatically
  add(append )


  ### button.addEventListener("click", (event)=>{
    event.preventDefault();
    console.log("you clicked")
    console.log(this.elements.todo.value)
  })

https://www.w3schools.com/html/html_form_elements.asp

method 
element.append to add to the webpage

to clear text box
text.Box = "";
textBox.focus();

# jQuery acts as awrapper to make more eficient at DOM 
it solved browser compatibility
jquery.com write less do more =)

window
document

//to access dom api
//run code whe the page loads
//always run code inside documetn.ready function to make sure that the elemt is ready when used

$(document).ready(function(){
  console.log("ready!");
  $(".buy-btn").on("click", function(){
    console.log("you clicked the button")

  })
})

#Dom traversal tell the brwoser get the nearest element toa void stressing the broser to look for an id....

const section =$(this).closest()