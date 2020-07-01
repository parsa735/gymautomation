const udao = require('../DAO/userDAO')
const dt = require('../Service/DateTime')


module.exports.selectUser = async (username, password) => {
    return await udao.selectUser(username, password);

}

module.exports.createUser = async (req) => {
    let user;
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.tell = req.body.tell;
    user.phonenumber = req.body.phonenumber;
    user.address = req.body.mobile;
    user.province = req.body.province;
    user.city = req.body.city;
    user.created_datetime = PersianDate(Date.now());
    const result = await udao.createUser(user);

}
