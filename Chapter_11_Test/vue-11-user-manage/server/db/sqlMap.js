var sqlMap = {
    user:{
        add:'insert into user (username,account,password,repeatPass,email,phone,card,birth,sex) value (?,?,?,?,?,?,?,?,?)',
        select_name:'select * from user',
        updata_user:'update user set'
    }
}

module.exports=sqlMap;