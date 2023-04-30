/*这个文件中保存了数据库相关的配置，包括用户名和密码 */

module.exports = {
    mysql:{
        host:'localhost',
        user:'admin',
        password:'123456',
        port:'3306',
        database:'login'
    }
    // 这里出现一个问题，就是连接数据库的时候除了点问题，登录不上，原因是8.0的mysql密码认证方式发生了改变，在8.0+中使用指定使用caching_sha2_password创建用户账号密码时，有些客户端暂时不支持，从而导致连接认证失败。所以，有时需要指定mysql_native_password创建
}