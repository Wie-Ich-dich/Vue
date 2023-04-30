/*这个文件中设置后端服务器，应该是新建express实例，就达到了后端服务器的创建；*/

const userApi=require('./api/userApi');
const fs=require('fs');
const path=require('path');
const bodyParser=require('body-parser');
const express=require('express');

const exApp=express();
exApp.use(bodyParser.json());
exApp.use(bodyParser.urlencoded({extended:true}));
exApp.use('/api/user',userApi);  //这句话我不知道是什么东西？？
exApp.listen(3000);
console.log('success listen at port:3000');
