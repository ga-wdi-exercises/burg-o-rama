'use strict'

//modules
var express = require('express');
var logger = require('morgan');
var path = require('path');

var ejs = require('ejs');
var request = require('request');

// port settings
var port = process.env.port || 3000;

//routing var(s)
var burgerRoutes = require( path.join( __dirname, 'routes/burgers') );

// app settings
var app = express();

// logging
app.use( logger( 'dev' ) );

// server functioning diagnostic
app.listen( port, () => {
  console.log('The server is up and running, on port ' + port + ' better go catch it!')
  console.log( new Date() )
});

app.get( '/', (req,res) => {
  res.render('pages/index.html.ejs');
})

app.use( '/', burgerRoutes );
