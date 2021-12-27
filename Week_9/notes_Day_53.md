Dec 26, 2021

Restarting after some time off for the holiday break.

# AJAX
Ajax is a set of web development techniques that uses various web technologies on the client-side to create asynchronous web applications. With Ajax, web applications can send and retrieve data from a server asynchronously without interfering with the display and behaviour of the existing page.

It can send and receive information in various formats, including JSON, XML, HTML, and text files

## worked on css and jquery
https://wesbos.com/template-strings-html

$(".button").on("click", (event) => {
  // do something here
})



// This creates an HTML li element
const $item = $("<li>")
// Then we retrieve an existing element from our document
const $list = $("#my-list")
// Then we add our li element to the bottom of the list element
$list.append($item)

## Serialized
.serialize() function turns a set of form data into a query string. This serialized data should be sent to the server in the data field of the AJAX POST request.
 It can act on a jQuery object that has selected individual form controls, such as <input>, <textarea>, and <select>: $( "input, textarea, select" ).serialize();
 

$( "form" ).on( "submit", function( event ) {
  event.preventDefault();
  console.log( $( this ).serialize() );
});

## worked on ajax request to submit form POST

add an event listener that listens for the submit event
prevent the default behaviour of the submit event (data submission and page refresh)
create an AJAX POST request in client.js that sends the form data to the server.


## GET

client side - javascript to GET fetch data from the server
The loadtweets function will use jQuery to make a request to /tweets and receive the array of tweets as JSON.

The loadtweets function will use jQuery to make a request to /tweets and receive the array of tweets as JSON.

timeago
timeago is a small library which has a single focus: displaying the time passed since a date.

https://cdnjs.com/libraries/timeago.js

used cdnjs to copy the script tag
