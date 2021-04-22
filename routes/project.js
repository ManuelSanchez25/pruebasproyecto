const express = require('express');
const router = express.Router();
const projectAPI = require('./projectAPI');

// Get Login page
router.get('/login', (req, res) => {
  res.render('login');
});

// Get home page
router.get('/home', async function (req, res, next) {
  let funcion = await projectAPI.fetchOneByKey();
  let function2 = await projectAPI.litrosPorDia();
  let funcion3 = await projectAPI.infoFarm();
  var auxJSON = JSON.stringify(funcion);
  var auxForV1 = [];
  var litros =[];
  var dia =[];
  let lugar =[];
  var irrigationTimeSec =[];
  var cultivo =[];
  for (let i = 0; i < funcion.length; i++) {
    auxForV1.push(funcion[i].airHumidity)
  }
  for (let i = 0; i < function2.length; i++) {
    litros.push(function2[i].litersUsed)
  }
  for (let i = 0; i < function2.length; i++) {
    dia.push(function2[i].day)
  }
 
  for (let i = 0; i < function2.length; i++) {
    irrigationTimeSec.push(function2[i].irrigationTimeSec)
  }
  for (let i = 0; i < funcion3.length; i++) {
    lugar.push(funcion3[i].City)
  }
  for (let i = 0; i < funcion3.length; i++) {
    cultivo.push(funcion3[i].farmName)
  }
  

  console.log(auxForV1);
  console.log(litros);
  console.log(dia);
  console.log(lugar);
  res.render('home', {
    auxForV1,litros,dia,irrigationTimeSec,lugar,cultivo
  })
  console.log("JSON from the table of SensorsData: " + auxJSON);
}); 


//Export for middlewares
module.exports = router;