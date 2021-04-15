const express = require('express');
const router = express.Router();
const projectAPI  = require('./projectAPI');
const json = require('../data/variables.json')
const data = require('../data/variables.json');
//pruebas
//Declare a variable for init the information got of the .json
var  variab  = projectAPI.variables;

var auxVars = JSON.stringify(variab);


// Get Login page
router.get('/login', (req, res) => {
    res.render('login');
  });


// Get home page
router.get('/home', (req, res) => {
    res.render('home', {variab})
    console.log("varssss: "+ auxVars);
  });

//Export for middlewares
module.exports = router;