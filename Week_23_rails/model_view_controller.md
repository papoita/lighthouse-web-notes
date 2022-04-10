April 9, 2022
The Model-View-Controller (MVC) is an architectural pattern that has been adopted to build modern web applications. Rails is not the first MVC web framework, but likely one of the most popular.

The "M" which is ActiveRecord

https://www.railstutorial.org/book/beginning#sec-mvc
"When interacting with a Rails application, a browser sends a request, which is received by a webserver and passed on to a Rails controller, which is in charge of what to do next. In some cases, the controller will immediately render a view, which is a template that gets converted to HTML and sent back to the browser. More commonly for dynamic sites, the controller interacts with a model, which is a Ruby object that represents an element of the site (such as a user) and is in charge of communicating with the database. After invoking the model, the controller then renders the view and returns the complete web page to the browser as HTML."

# MVC in action
Here is a summary of the steps shown in Figure 2.12:

The browser issues a request for the /users URL.
Rails routes /users to the index action in the Users controller.
The index action asks the User model to retrieve all users (User.all).
The User model pulls all the users from the database.
The User model returns the list of users to the controller.
The controller captures the users in the @users variable, which is passed to the index view.
The view uses embedded Ruby to render the page as HTML.
The controller passes the HTML back to the browser.4