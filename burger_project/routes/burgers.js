'use strict'
var express = require('express');
var burgers = express.Router();


burgers.route('/')
.get((req,res)=>{
    // res.render('pages/burger_all',{data:burgerData })
    res.send('this is my burger page whicl will list the all burgers');
  })
.post((req,res)=>{
    res.redirect('./');
    console.log('I ll use this to create new burger entry')
})

burgers.route('/new')
.get( (req,res)=>{
    res.send('this will render my form ');
})

burgers.route('/:burgerID')
.get((req,res)=>{
  var burgID = req.params.burgerID
  res.send('this will read my params ' + burgID);
})
.put((req,res)=>{
  console.log('this will edit one burger which is comming grom ?id/edit')
})

burgers.route('/:burgerID/edit')
.get( (req,res)=>{
    res.send('this will edit my form which will redirect /burgers/:edit ');
})








module.exports = burgers;
