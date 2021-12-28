<!-- @format -->

Dec 27, 2021

# .keyup vs .change

.change() only triggers after focus is moved away from an element

Correct, the event only fires after the focus is lost

keyup(): Event fired when a key is released on the keyboard. keydown(): Event fired when a key is pressed on the keyboard. keypress:() Event fired when a key is pressed on the keyboard
he keypress event is sent to an element when the browser registers keyboard input

The change event is sent to an element when its value changes. This event is limited to <input> elements, <textarea> boxes and <select> elements. For select boxes, checkboxes, and radio buttons, the event is fired immediately when the user makes a selection with the mouse, but for the other element types the event is deferred until the element loses focus.

# onload.document vs docuemtn.ready

The ready event occurs after the HTML document has been loaded, while the onload event occurs later, when all content (e.g. images) also has been loaded.

The onload event is a standard event in the DOM, while the ready event is specific to jQuery. The purpose of the ready event is that it should occur as early as possible after the document has loaded, so that code that adds functionality to the elements in the page doesn't have to wait for all content to load.

# Fixes

text area instead of input allows for text wrapping without changing the size

# @TODO

fix text in post rendered to be wrapped as well
solved!
max-width: 650px;
word-wrap: break-word;

# Error with jQuery

use the slideDown jQuery function for some simple animation.
undecided if to use

## .hide

Durations are given in milliseconds; higher values indicate slower animations, not faster ones. The strings 'fast' and 'slow' can be supplied to indicate durations of 200 and 600 milliseconds, respectively.

## .empty

$(selector).empty()
The empty() method removes all child nodes and content from the selected elements.

Note: This method does not remove the element itself, or its attributes.

## .slideDown

## .slideUp

# XSS

"Cross-Site Scripting" (XSS for short)
be careful not to evaluate text that comes from untrusted sources (ie. users). If a template treats untrusted text as HTML, then a cunning user could craft their input text to run JavaScript on other user's pages.
"escape" the potentially insecure text. "Escaping text" means re-encoding text so that unsafe characters are converted into a safe "encoded" representation. For example, with HTML, <script> would be converted to &lt;script&gt;. The HTML tag would then be visible to the user, but not evaluated as a tag by the browser.

## Method if tweet was createed with jQuery

.text();
.createTextNode();

## Method if tweet was created using string literal

const escape = function (str) {
let div = document.createElement("div");
div.appendChild(document.createTextNode(str));
return div.innerHTML;
};

const safeHTML = `<p>${escape(textFromUser)}</p>`;

# length Validation

implement validation before sending the form data to server
use alert

https://stackoverflow.com/questions/15060292/a-simple-jquery-form-validation-script

maxWords
minWords

jQuery
$(document).ready(function () {

    $('#myform').validate({ // initialize the plugin
        rules: {
            field1: {
                required: true,
                email: true
            },
            field2: {
                required: true,
                minlength: 5
            }
        }
    });

});

$("#myform").validate({
rules: {
name: {
required: true,
minlength: 2
}
},
messages: {
name: {
required: "We need your email address to contact you",
minlength: jQuery.validator.format("At least {0} characters required!")
}
}
});

html

<form id="myform">
    <input type="text" name="field1" />
    <input type="text" name="field2" />
    <input type="submit" />
</form>
