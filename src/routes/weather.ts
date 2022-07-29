'use strict';
import express from "express";
import weatherComponent from "../component/Weather";

const app = express();


// Api for create new User
app.get('/',weatherComponent.search );



module.exports = app;