/**
 * @description 密钥常量,加入.gitignore 中,不提交到
 * @author 森林
 */

module.exports = {
  CRYPTO_SECRET_KEY: '***',  // 加密密钥,例如 password 可以用这个加密
  DEV_MYSQL_KEY: '***',  // 测试环境的 mysql 密码
  PROD_MYSQL_KEY: '***',  // 正式环境的 mysql 密码
  _JWT_KEY_: '***',  // jwt 的加密密钥
}
