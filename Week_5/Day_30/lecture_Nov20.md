<!-- @format -->

# Promises

moving from callbacks to promises
async involves delay as it requires info from code or form APIs and will not block code not bloque code.
promise is like a ontract
pending
resolved //.then
rejected

error .catch //only have to catch it once in the code vs cb waterfalls
.finally

chaining promises using then

promise.all //wait until all promises are resolved to return

promise.race // as soon as one promise is ready it will return the first resolved

## async & wait

very new

# Sapcex -demo

const {readdir, readFile} = require("fs/promises");

# Others

ask 1-1 on errror handling, trhow and .catch
svg for input from CLI

readline
prompt

do not have to do npm install if it is already built in node

# aditional notes from labWork

need to check error handling
revise callbacks from json the cat

npx mocha
