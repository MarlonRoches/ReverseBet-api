const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const singleton = require('./Singleton/Singleton');
const port = 4000
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

function getReqParam(req, key){
    return req.params[key]
}


app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
