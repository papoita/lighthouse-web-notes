Revision of Server in quiz app to better organize code.

// REQUIREMENTS
// load .env data into process.env

//node nodules dependencies

//local helper files

// Separated Routes for each Resource

// SERVER SETTINGS
// Web server config
const app = express();
const PORT = process.env.PORT || 8080;

// PG database client/connection setup

// MIDDLEWARES

//ROUTES ENDPOINTS

//LISTENER
app.listen(PORT, () =>
{
  console.log(`Example app listening on port ${PORT}`);