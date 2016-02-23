'use strict'
var express = require('express');
var request = require('request');
var burgers = express.Router(); //find out what .ROUTER() does ==> gets routes structure working. see export at bottom of page.


 // /burgers : to create a burger or list burgers (depending on the HTTP verb used
burgers.route('/burgers')
 .get( (req,res) => {
  res.send('/burger done got');
})


// /burgers/new : to view the 'new burger' form.
burgers.route('/burgers/new')
  .get( (req,res) => {
    res.send('/burgers/new done got');
  })
  .post( (req,res) => {
    res.send('/burgers/new gone postal');
  } )

//  /burgers/:id : to view/edit/delete ONE burger.
burgers.route('/burgers/:id')
  .get( (req,res) => {
    res.send('/burgers/:id done got');
  })
  .put( (req,res) => {
    res.send('/burgers/:id done put-ed');
  })
  .delete( (req,res) => {
    res.send('/burgers/:id done deleted');
  })




// /burgers/:id/edit : to view the 'edit burger' form.
burgers.route('/burgers/:id/edit')
  .get( (req,res) => {
    res.send('/burgers/:id/edit done got');
  } )

module.exports = burgers;
