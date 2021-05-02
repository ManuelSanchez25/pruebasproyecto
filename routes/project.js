const { json } = require('express');
const express = require('express');
const router = express.Router();
const projectAPI = require('./projectAPI');

//API for the project Cloud 2021 of AWS S3
const APIS3 = require('./s3proyecto')

//Get user page
router.get('/s3obtener', async function (req, res, next)  {
  const dataFromS3 = await APIS3.getfarmsFromS3();
  res.send(dataFromS3);
  console.log(dataFromS3);
});
// Get Login page
router.get('/login', (req, res) => {
  res.render('login');
});

//presentacion
router.get('/presentacion', async (req, res) => {
  
  res.render('presentacion');
});
router.get('/entrar', async (req, res) => {
  res.render('entrar',);
});
router.get('/iniciar', async (req, res) => {
  res.render('iniciar',);
});

// Get home page
router.get('/home', async (req, res, next) => {
  try {
    let s3funcion = await APIS3.getfarmsFromS3();
    let funcion = await projectAPI.fetchOneByKey();
    let function2 = await projectAPI.litrosPorDia();
    let funcion3 = await projectAPI.infoFarm();
    let datosbrutos = await projectAPI.datossensores();
     s3funcion = JSON.parse(s3funcion)
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
    for (let i = 0; i < s3funcion.length; i++) {
      litros.push(s3funcion[i].litersUsed)
    }
    for (let i = 0; i < s3funcion.length; i++) {
      dia.push(s3funcion[i].day)
    }
  
    for (let i = 0; i < s3funcion.length; i++) {
      irrigationTimeSec.push(s3funcion[i].irrigationTimeSec)
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
     console.log(s3funcion);
     console.log(function2);

 
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