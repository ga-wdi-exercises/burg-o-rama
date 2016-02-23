'use strict'

//modules
var express = require('express');
var logger = require('morgan');
var path = require('path');

var ejs = require('ejs');
var request = require('request');

var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// port settings
var port = process.env.port || 3000;

//routing var(s)
var burgerRoutes = require( path.join( __dirname, 'routes/burgers') );

// app settings
var app = express();

// parse incoming forms / we'll be reading the form body, but not accepting files, or anything more than text
app.use( bodyParser.urlencoded({ extended: false }));

// we'll convert everything we receive into json, for our convenience
app.use( bodyParser.json());

// override with POST having ?_method=XXXX  e.g. If we need to make a PUT, we'll POST to a url appended with ?_method=put
app.use( methodOverride('_method') );

// logging
app.use( logger( 'dev' ) );

//view engine
app.set( 'view engine', 'ejs' );

// server functioning diagnostic
app.listen( port, () => {
  console.log('The server is up and running, on port ' + port + ' better go catch it!')
  console.log( new Date() )
});

app.get( '/', (req,res) => {
  res.render('pages/index.html.ejs');
})

app.use( '/burgers', burgerRoutes );
