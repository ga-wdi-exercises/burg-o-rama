'use strict'
var express     = require('express');
var app = express();
var port = process.env.PORT || 3000;
var logger      = require('morgan');
var path        = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var burgerRoutes = require( path.join(__dirname, '/routes/burgers'));

// parse incoming forms
app.use( bodyParser.urlencoded({ extended: false }));
app.use( bodyParser.json());
// overides the post to put or patch or delete
app.use(methodOverride('_method'));
app.use(logger('dev'));

//the application:



app.get("/", function(req,res){
  res.send('this is my root')
})

app.use( '/burgers', burgerRoutes)





app.listen(port,()=>
  console.log('Server Up!', port,'//', new Date())
)
