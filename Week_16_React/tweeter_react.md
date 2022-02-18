Feb 17, 2022

1. cloned repo
2. npm install -g serve in host machine
3. navigate to html-version
4. type <serve> in terminal
5. goto http://localhost:3000 to see files
6. create  section for each file that has only html for that section
7. paste original <head> section into all files
8. change only contents of the body
9. separate all components into dif html files
10. from the root folder of th eproject
```
npx create-react-app react-version
```
11. check app.js where all jsx is in the return statement. this is a functional component
12. create navigation component
13. Create all components
14. create folder in src called components move all these js files in there
15. modify root component in app.js
16. npm start
17. remove styling form index.css and app.css
18. clean app.js to remove unnecessary JSX only leave:
```
<div className="App"></div>
```
19. import components you created
20. show components by adding them into the function using
```
<Navigation /> 
or 
<Navigation></Navigation>
```
21. import html into components for navigation
by cutting all the html of th efile and pasting it inside the navigation component
22. import styles from original.css into App.css
23. define structure inside app.js
24. copy stylesheets in the <head> tag of index.html
25. bring html into components
make sure to import all necessary files
# Event HAndling

26. 