Nov 23
# TinyApp continue

on directory inCLI ```npm install ejs```

using a views directory for template files (like urls_index.ejs) is such common practice that it is an Express convention.
urls_index.ejs to display all the url in their short form

It's only necessary to restart the server when we make changes to server files. Changes to front-end files (i.e. anything in our views directory) can be seen by refreshing the browser.

```<%= %>``` syntax for code or variable displaying in the webpage
```<% %>``` run code without displaying

 ```format /urls/:shortURL ```
  The : in front of id indicates that id is a route parameter. This means that the value in this part of the url will be available in the req.params object.
  ```app.get("/urls/:shortURL", (req, res) => {
	res.send(req.params);
}); ```
