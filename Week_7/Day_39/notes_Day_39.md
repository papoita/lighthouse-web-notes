<!-- @format -->

Nov 30
Started week 7
USer authentication

Lecture cookies and user autorization
hhtp is stateless to mae it more performant - doesn't remember the previous interaction

lightmode/ access to the dashboard, language,

# cookies

key/value pair stored in your browser
stored in the browser

```
app.use(express.static("public"));//if wanted to have a css file static vs the dynamic ejs

```

use ejs to input the crocodile tiles in ejs

```

const language options = req.cookies.language || " en "  ;
```

routes
get login
get register
get secret
post login
post register
post logout

ejs files for each

"required" next to the name html5 will not register the form

//helper functions needs reviewing
