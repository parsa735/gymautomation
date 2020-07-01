const connection = require('../database/dbConnection');

module.exports.createMember = (member) => {
    let sql = "insert into members (firstname ,"
        + "lastname ,"
        + "tell ,"
        + " mobile , "
        + "created_datetime , "
        + "start_date , "
        + "expire_date , "
        + "sport_type,"
        + "sessions_number,"
        + "branch_id,"
        + "address) values ?";

    let values = [
        [
            member.firstname,
            member.lastname,
            member.tell,
            member.mobile,
            member.created_datetime,
            member.start_date,
            member.expire_date,
            member.sport_type,
            member.sessions_number,
            member.branch_id,
            member.address,

        ]
    ]
    return new Promise((resolve, reject) => {
        connection.query(sql, [values], (err, result) => {
            if (err) {
                console.log(err)
                return reject(err)
            }
            return resolve({ id: result.insertId, member: member })
        })

    })
}


module.exports.lastInsertId = () => {
    let sql = "select last_insert_id()";
    return new Promise((resolve, reject) => {
        connection.query(sql, (err, result) => {
            if (err) {
                console.log(err)
                return reject(err)
            }
            return resolve(result)
        })

    })
}



module.exports.findById = (id) => {
    let sql = "select * from members where id = ?";
    return new Promise((resolve, reject) => {
        connection.query(sql, [id], (err, result) => {
            if (err) {
                console.log(err);
                return reject(err);
            } else {


                return resolve(result[0]);

            }

        })
    })
}


module.exports.decreaseSessionNumber = (id) => {
    let sql = "update members set sessions_number = sessions_number - 1 where id = ?";
    return new Promise((resolve, reject) => {
        connection.query(sql, [id], (err, result) => {
            if (err) {
                console.log(err);
                return reject(err);
            } else {
                return resolve(result);
            }
        })
    })
}