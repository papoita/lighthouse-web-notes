Dec 12, 2021

# CSS Fundamentals

cascading style sheets
static rules: selector with values

.classes.class
#id
div

## specificity 
determines how rules are prioritized
order of prevalecence determines which style is applied  

# crafting the form
content type : URL enconded =>default content type for web submission


# curl test
curl -X POST -d 'text=this is a new tweet test' -H "Content-Type: application/x-www-form-urlencoded" http://127.0.0.1:8080/tweets

# DOM events
how and why add js events to a webpage


//// 
Dec 13, 2021
# keystrokes
keypress is deprecated
use keydown 
## onkeydown /onkeyup
(onkeydown)
```
<p>Focus the IFrame first (e.g. by clicking in it), then try pressing some keys.</p>
<p id="log"></p>
const log = document.getElementById('log');

document.addEventListener('keydown', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
```
## input
 If you're looking for a way to react to changes in an input's value, you should use the input event. Some changes are not detectable by keyup, for example pasting text from the context menu in a text input.
 id => #
 class => .

 # to remove eventListener 
  // button.removeEventListener('click', user.greeting);