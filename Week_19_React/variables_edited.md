```scss
$font-family: "Source Sans Pro", sans-serif;

$active-opacity: 1;
$inactive-opacity: 0.15;

$white: #fff;
$black: #000;

$dark-background: #064635;

$weeks-colors: #519259, #F0BB62, #F4EEA9, #27cd40;
$booked-color: #519259;
$danger-color: #ee5253;
$error-color: #f67e0e;
$confirm-color: #44ac10;

$spacing: 2rem;
```
error
Listening on port 8001 in development mode.
error: invalid input syntax for integer: "{"id":2,"name":"Tori Malcolm","avatar":"https://i.imgur.com/Nmx0Qxo.png"}"
    at Parser.parseErrorMessage (/Users/papoita/lighthouse/react/scheduler-api/node_modules/pg-protocol/dist/parser.js:278:15)
    at Parser.handlePacket (/Users/papoita/lighthouse/react/scheduler-api/node_modules/pg-protocol/dist/parser.js:126:29)
    at Parser.parse (/Users/papoita/lighthouse/react/scheduler-api/node_modules/pg-protocol/dist/parser.js:39:38)
    at Socket.<anonymous> (/Users/papoita/lighthouse/react/scheduler-api/node_modules/pg-protocol/dist/index.js:10:42)
    at Socket.emit (node:events:520:28)
    at addChunk (node:internal/streams/readable:315:12)
    at readableAddChunk (node:internal/streams/readable:289:9)
    at Socket.Readable.push (node:internal/streams/readable:228:10)
    at TCP.onStreamRead (node:internal/stream_base_commons:190:23) {
  length: 155,
  severity: 'ERROR',
  code: '22P02',
  detail: undefined,
  hint: undefined,
  position: undefined,
  internalPosition: undefined,
  internalQuery: undefined,
  where: undefined,
  schema: undefined,
  table: undefined,
  column: undefined,
  dataType: undefined,
  constraint: undefined,
  file: 'numutils.c',
  line: '62',
  routine: 'pg_atoi'
}