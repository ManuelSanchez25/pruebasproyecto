const express = require('express');
const router = express.Router();
const projectAPI = require('./projectAPI');

// Get Login page
router.get('/login', (req, res) => {
  res.render('login');
});

//presentacion
router.get('/presentacion', async (req, res) => {
  res.render('presentacion');
});

// Get home page
router.get('/home', async (req, res, next) => {
  try {
    let funcion = await projectAPI.fetchOneByKey();
    let function2 = await projectAPI.litrosPorDia();
    let funcion3 = await projectAPI.infoFarm();
    let datosbrutos = await projectAPI.datossensores();
    var auxJSON = JSON.stringify(funcion);
    var auxForV1 = [];
    var litros = [];
    var dia = [];
    let lugar = [];
    var irrigationTimeSec = [];
    var cultivo = [];
    var time = [];
    var light = []
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
    for (let i = 0; i < funcion.length; i++) {
      time.push(funcion[i].timestamp)
    }
    for (let i = 0; i < funcion.length; i++) {
      light.push(funcion[i].light)
    }
    time = JSON.stringify(time)
    datosbrutos = JSON.stringify(datosbrutos);
    // console.log(auxForV1);
    //console.log(litros);
    //console.log(dia);
    //console.log(datosbrutos);
    res.render('home', {
      auxForV1,
      litros,
      dia,
      irrigationTimeSec,
      lugar,
      cultivo,
      time,
      light,
      funcion,
      datosbrutos
    })
  }
 catch (err) {
  return res.status(400).send(err);
}
  
  // console.log("JSON from the table of SensorsData: " + auxJSON);
});


//Export for middlewares
module.exports = router;