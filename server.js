import { CaptchaRequest } from "./src/app/model/captchaRequest";

var express = require("express");
// var app = express();
// app.use(express.static(__dirname + "/dist"));
// var getReqListener = (request, response) => {
//     response.send(200, 'OK');
// }
// app.get("/", getReqListener);
// var serverListener = (request, response) => { }
// var server = app.listen(4200, serverListener);


var backendApp = express();

backendApp.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

var getReqListener = (request, response) => {
    response.status(200).send("Afff");
}
backendApp.get("/", getReqListener);

var getCaptchaListener = (request, response) => {
    var captcha = {id:1, value:"Afff"};
    response.status(200).send(captcha);
}
backendApp.get("/get", getCaptchaListener);


var verifyCaptchaListener = (request, response) => {
    response.status(200).send("Afff");
}
backendApp.get("/verify", verifyCaptchaListener);

var serverListener = (request, response) => {
    console.log('listening on port 8089');
 }
var server = backendApp.listen(8089, serverListener);


