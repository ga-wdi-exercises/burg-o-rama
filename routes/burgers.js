'use strict'
var express = require('express');
var request = require('request');
var burgers = express.Router(); //find out what .ROUTER() does ==> gets routes structure working. see export at bottom of page.


 // /burgers : to create a burger or list burgers (depending on the HTTP verb used
burgers.route('/')
  .get( (req,res) => {
    res.render('pages/burgerGallery.html.ejs');//must include .html.ejs, i don't know why Jason can leave it out. probably is cheating. /haterade
    // res.send('/burgers done got');
})
  .post( /*db.creates,*/ (req,res) => {
    //form should trigger post request. data should be referenced as req.body.something (name, toppings, etc)->how are these names determined by field name label?  call SQL query function to insert value.
    //then redirect with
    //res.redirect('/' + someVarMatchingNewlyAddedBurgerID); //this need to be URL, not route path.
    res.send('/burgers gone postal');
  })


// /burgers/new : to view the 'new burger' form.
burgers.route('/new')
  .get( (req,res) => {
    res.render('pages/burgerEdit.html.ejs', {
      burgerName: '',
    })
  })
  .post( (req,res) => {
    res.send('/burgers/new gone postal');
  } )

//  /burgers/:id : to view/edit/delete ONE burger.
burgers.route('/:burgerID')
  .get( (req,res) => {
    var bID = req.params.burgerID;
    //confirm burger exists, or spit error.
    if(!(bID/*in database //not sure how to check for this right now */)){
      res.sendStatus(404);
      return;
    }
    res.render('pages/burgerSingle.html.ejs', {
      burgerID: bID
    })
    // res.send('/burgers/:id done got');
  })
  .put( (req,res) => {
    var bID = req.params.burgerID;
    //confirm burger exists, or spit error.
    if(!(bID/*in database //not sure how to check for this right now */)){
      res.sendStatus(404);
      return;
    }
    /*
    call function to update DB for this burger. and ONLY this burger.
    */
    console.log('put-ed redirect-ed');
    // req.method = 'get';//from user alessioalex at http://stackoverflow.com/questions/8240447/express-js-cant-redirect
    res.redirect(303, '/burgers/'+bID ) //needs to be URL not route path
    // res.send('/burgers/:burgerID done put-ed');
  })
  .delete( (req,res) => {
    var bID = req.params.burgerID;
    //confirm burger exists, or spit error.
    if(!(bID/*in database //not sure how to check for this right now */)){
      console.log('someone tried to delete a burger that did not exist');
      return;
    }
    /*
    call function to update DB by removing this burger. and ONLY this burger.
    */
    console.log('a burger got deleted. was '+bID);
    res.redirect(303, '/burgers' ) //needs to be URL not route path
    // res.send('/burgers/:burgerID done deleted');
  })




// /burgers/:id/edit : to view the 'edit burger' form.
burgers.route('/:burgerID/edit')
  .get( (req,res) => {
    res.send('/burgers/:burgerID/edit done got');
  } )

module.exports = burgers;
