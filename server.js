//Essentials
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var dotenv  = require('dotenv')

// app.use(express.static('resources'));
 
// global.__basedir = __dirname;

const db = require('./app/config/db.config.js');

//force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
}); 

require('./app/routes/user.route.js')(app);
require('./app/routes/employee.route.js')(app);
require('./app/routes/company.route.js')(app);

var port = process.env.port || 8081

app.listen(port , ()=>
{
  console.log("App listening at http://%s:%s", port)
})