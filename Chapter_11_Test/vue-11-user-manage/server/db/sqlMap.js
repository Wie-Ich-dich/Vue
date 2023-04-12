/*这个文件中存储着各种sql数据库指令，如add、select_name、updata_user */

var sqlMap = {
    user:{
        add:'insert into user (username,account,password,repeatPass,email,phone,card,birth,sex) value (?,?,?,?,?,?,?,?,?)',
        select_name:'select * from user',
        updata_user:'update user set'
    }
}

module.exports=sqlMap;