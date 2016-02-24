'use strict'

var path       = require('path');
var express    = require('express');
var favicon    = require('serve-favicon');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var logger     = require('morgan');
var burgerRoutes = require( path.join(__dirname, '/routes/burgers'));

/* app settings */
var app = express();
var port = process.env.PORT || 3000;

// parse incoming forms
app.use( bodyParser.urlencoded({ extended: false }));
app.use( bodyParser.json());

// override with POST having ?_method=XXXX
app.use(methodOverride('_method'))


// static route to public
app.use(express.static(path.join(__dirname, 'public')));


// log
app.use( logger('dev') );


/*Views*/
app.set('view engine', 'ejs');


/*ROUTES*/
// home route
app.get('/', (req,res)=>res.render('pages/home'))


// Burgers
app.use( '/burgers', burgerRoutes)

app.listen(port,()=>
  console.log('Server Up! Ready to serve piping hot burgers on port', port,'//', new Date())
)
