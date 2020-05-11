// server.js 
// require our dependencies
var express        = require('express');
var expressLayouts = require('express-ejs-layouts');
const bodyParser     = require('body-parser');
const app            = express();
const webPort		   = 5000;
const port           = process.env.PORT || webPort;

// use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

// use body parser
app.use(bodyParser.urlencoded({ extended: true }));

// route our app
const router = require('./app/routes');
app.use('/', router);


// set static files (css and images, etc) location
app.use(express.static(__dirname + '/public'));

// start the server
app.listen(port, function() {
  console.log("App started and available on port " + webPort + " at http://localhost:"+ webPort +"/");
});

