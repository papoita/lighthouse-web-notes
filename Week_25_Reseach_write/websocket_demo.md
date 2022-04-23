websocket-demo repo

folder
index.js
in terminal <npm init -y>

npm install websocket

index.js would be the server code

then open chrome inspect console

```html
let ws = new WebSocket("ws://localhost:8080")
ws.onmessage = message => console.log(`we received a message from server ${message.data}`)
ws.send("Hello server its me client")
```

https://www.youtube.com/watch?v=cXxEiWudIUY&t=47s
websockets gaming
https://github.com/beaucarnes/anycard-fcc/blob/master/server.js
card trick
https://www.youtube.com/watch?v=h21pa3yeW08&t=396s

full magic trick
https://medium.com/outsystems-engineering/making-magic-with-websockets-and-css3-ec22c1dcc8a8
https://github.com/heliodolores/magic-tricks-example
https://codepen.io/heliodolores/pen/ZBQJEJ
https://codepen.io/heliodolores/pen/vyLJPL

deck of cards
https://github.com/deck-of-cards/deck-of-cards
or
https://github.com/beaucarnes/anycard-fcc/tree/master/cards
or
https://github.com/beaucarnes/anycard-fcc/blob/master/server.js
https://www.youtube.com/watch?v=h21pa3yeW08

socket.io
https://socket.io/get-started/chat
used this as a starter plate for the card magic trick

Followed this tutprial but instead of using text to be trasbfered transfer cards

tranfer images
https://stackoverflow.com/questions/59478402/how-do-i-send-image-to-server-via-socket-io
https://codebaker.in/socket-send-image-chat-socket-using-nodejs/

https://codingshiksha.com/javascript/node-js-express-tutorial-to-upload-broadcast-base64-or-binary-image-to-all-sockets-using-socket-io-in-browser-using-javascript-full-project-for-beginners/

https://www.youtube.com/watch?v=ZwFA3YMfkoc
real time application using react,node, socket.io