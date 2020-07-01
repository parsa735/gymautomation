const connection = require("../database/dbConnection")


module.exports.selectUser = (username, password) => {

    let sql = "select id , username , password , branch_id from users where username = ? and password = ?"

    return new Promise((resolve, reject) => {
        connection.query(sql, [username, password], (err, result) => {
            if (err) {
                return reject(err);
            }

            return resolve(result)
        });
    })



}







