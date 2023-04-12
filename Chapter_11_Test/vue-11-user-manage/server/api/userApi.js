

var models=require('../db/db');
var express=require('express');
var router=express.Router();
var mysql=require('mysql');
var $sql=require('../db/sqlMap');

//创建数据库连接，并启动；
var conn=mysql.createConnection(models.mysql);
conn.connect();

//这个函数是用来干吗的？？？感觉可以不用封装这部分代码出来，直接用就好；
var jsonWrite=function(res,ret){
    if(typeof ret === 'undefined'){
        res.send('err');
    }else{
        console.log(ret);
        res.send(ret);
    }
}

var dateStr=function(str){
    return new Date(str.slice(0,7));
}

//注册或添加用户
router.post('/addUser',(req,res)=>{
    var sql=$sql.user.add;
    var params=req.body;
    conn.query(sql,[params.name,params.account,params.pass,params.checkPass,params.email,params.phone,params.card,dateStr(params.birth),params.sex],function(err,result){
        if(err){
            console.log(err);
        }
        if(result){
            jsonWrite(res,result);
        }
    })
});

//登录用户
router.post('/login',(req,res)=>{
    var sql_name=$sql.user.select_name;
    var user=req.body;
    console.log(user);
    if(user.name){
        sql_name+=" where username='"+user.name+"'";
        console.log(sql_name);
    }
    conn.query(sql_name,user.name,function(err,result){
        //不懂这里为什么要再传一遍user.name？？？
        if(err){
            console.log(err);
        }
        if(result[0] === undefined){
            req.send('-1');//表示此用户不存在
        }else{
            var resultArray=result[0];
            if(resultArray.password === user.password){
                jsonWrite(res,result);
            }else{
                res.send('0');//表示用户存在，但是密码错误；
            }
        }
    })
});

//查询用户数据
router.get('/getUser',(req,res)=>{
    var sql_name=$sql.user.select_name;
    var params=req.query;
    if(params.name){
        sql_name+=" where username='"+params.name+"'";
    }
    console.log(sql_name);
    conn.query(sql_name,params.name,function(err,result){
        if(err){
            console.log(err);
        }
        if(result[0] === undefined){
            res.send('-1');
        }else{
            jsonWrite(res,result);
        }
    })
});

//更新用户信息
router.post('/updateUser',(req,res)=>{
    console.log('信息更新开始……');
    var sql_update=$sql.user.updata_user;
    var params=req.body;
    if(params.account){
        sql_update+=" email='"+params.email+
        "',phone='"+params.phone+
        "',card='"+params.card+
        "',birth='"+new Date(params.birth).toLocaleDateString()+
        "',sex='"+params.sex+
        "' where account ='"+params.account+"'";
    }
    conn.query(sql_update,params.account,function(err,result){
        if(err){
            console.log(err);
        }
        console.log(result);
        if(result.affectedRows === undefined){
            res.send('更新失败，请联系管理员');
        }else{
            res.send('ok');
        }
    })
});

//修改密码
router.post('/modifyPassword',(req,res)=>{
    var sql_modify=$sql.user.updata_user;
    var params=req.body;
    if(params.account){
        sql_modify+=" password='"+params.pass+"',repeatPass='"+params.checkPass+"' where account='"+params.account+"'";
    }
    conn.query(sql_modify,params.account,function(err,result){
        if(err){
            console.log(err);
        }
        if(result.affectedRows === undefined){
            res.send('修改密码失败，请联系管理员！');
        }else{
            res.send('ok');
        }
    })
});

module.exports=router;