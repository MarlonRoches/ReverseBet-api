const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const singleton = require('./Singleton/Singleton');
const port = 4000
const {vendedor}= require('./Models/Usuario');



app.use(cors())
app.get('/Login', (req, res) => {
  return res.send({
    user:"Marlon",
    password:"Roches",
    email:"roches856"
  });
});


app.get('/Login/:user/:password', (req, res) => {
    singleton.add(req.params.user, {user: getReqParam(req,"user"),password:getReqParam(req,"password"),save:"guardado en lka api" })
    
    return res.send(singleton.get(getReqParam(req,"user")));
  });



  
/**
 * devuelve todas pujas sin distinguir ronda
 * 
 *
 */
app.get("/getRondas", (req,res) => {

let vendedores = []

  let vendedor1 = new vendedor();
  let vendedor2 = new vendedor();
  singleton.add("vendedor1", vendedor1)
  singleton.add("vendedor2", vendedor2)
  vendedor1.pushOferta(5)
  vendedor1.pushOferta(3)
  vendedor1.pushOferta(4)

  vendedor2.pushOferta(7)
  vendedor2.pushOferta(8)
  vendedor2.pushOferta(3)
vendedores.push(vendedor1)
vendedores.push(vendedor2)

console.log("arreglo local en el scope getRondas",vendedores)
console.log("arreglo local en singleton",singleton.getData())

  return res.send(vendedores.map(e => {
    return e.Ofertas//revuelve el arreglo de TODAS ofertas 
   }))
})



/**
 * devuelve las pujas por numero de ronda
 * 
 * @param numronda es el numero de la ronda que se solicita
 */
app.get("/getRondas/:numronda", (req,res) => {

  let vendedores = []
  
    let vendedor1 = new vendedor();
    let vendedor2 = new vendedor();
    singleton.add("vendedor3", vendedor1)
    singleton.add("vendedor4", vendedor2)
    vendedor1.pushOferta(15)
    vendedor1.pushOferta(13)
    vendedor1.pushOferta(14)
  
    vendedor2.pushOferta(17)
    vendedor2.pushOferta(18)
    vendedor2.pushOferta(13)


    console.log("arreglo local en el scope getRondas",vendedores)
console.log("arreglo local en singleton",singleton.getData())


  vendedores.push(vendedor1)
  vendedores.push(vendedor2)
  
  console.log(vendedores)
  

  
    return res.send(vendedores.map(e => {
      return e.Ofertas[req.params.numronda]//revuelve el arreglo de TODAS ofertas 
     }))
  })

  app.get("/singleton", (req,res) => {

    return res.send(singleton.getData())
  })
  


function getReqParam(req, key){
    return req.params[key]
}


app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});


/// ADMIN
// getofertas
//a. Definir las condiciones que debe llenar el vendedor
// get vendedores/get condiciones ...
// startRonda (pone la siguiente rona en true)
// endRonda (pone la siguiente rona en false)
// cada ronda tine 5 min 
//timer de ofertar de 5 minutos
//timer para esperar la siguiente ronda
// 
//  ************** SELLER *************
//   INICIO
// setRequerimientos proprios -> {}
// validarRequerimientos return bool  
// set
// Servicio pre y post venta
// c. Tiempos de entrega
// d. Formas de pago
// e. Penalizaciones
// f. Cualquier otra que consideren adecuada para garantizarse la entrega a tiempo de 
// los suministros.
// RONDAS
//setOferta . envian una oferta
//getEstadoRonda {devuelve si la ronda siguiente ya comenzo y el numero de la ronda} consultar este para darles el vanderaso de que pueden empezar a ofertar
// 
// ******* vendedor **/////////
//getOfertas
//
//
//
//
//
//
