const mdao = require('../DAO/memberDAO')
module.exports.createMember = async (data) => {
    const dt = require('../Service/DateTime')
    const member = {
        firstname: data.firstname,
        lastname: data.lastname,
        tell: data.tell,
        mobile: data.mobile,
        start_date: data.start_date,
        expire_date: dt.createExpireDate(30),
        sessions_number: data.sessions_number,
        sport_type: data.sport_type,
        address: data.address,
        created_datetime: dt.getDateAndTime()
    }

    return await mdao.createMember(member);
}



module.exports.lastIsertId = async () => {
    return await mdao.lastInsertId();
}


module.exports.findById = async (id) => {
    let upres = await this.decreaseSessionNumber(id);
    if (upres.affectedRows === 1) {
        return await mdao.findById(id);
    }

}


module.exports.decreaseSessionNumber = async (id) => {
    return await mdao.decreaseSessionNumber(id);
}