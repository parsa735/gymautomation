const moment = require('jalali-moment');
let date = new Date();
module.exports.getDate = () => {
    return moment().locale('fa').format('YYYY/MM/DD');
}


module.exports.createExpireDate = (days) => {
    return moment().add(days, 'day').locale('fa').format('YYYY/MM/DD');
}

module.exports.getDateAndTime = () => {
    return moment().locale('fa').format('YYYY/MM/DD HH:mm');
}