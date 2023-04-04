const userApi=require('./api/userApi');
const fs=require('fs');
const path=require('path');
const bodyParser=require('body-parse');
const express=require('express');

const exApp=express();
exApp.use(bodyParser.json());
exApp.use(bodyParser.urlencoded({extended:true}));
exApp.use('/api/user',userApi);
exApp.listen(3000);
console.log('success listen at port:3000');
