const msrv = require('../Service/memberSRV');
let dt = require('../Service/DateTime')
module.exports = (app) => {
    app.get('/CreateUser', (req, res) => {
        if (!req.session.user) {
            res.redirect('/')
        } else {
            res.render('CreateUser', { username: req.session.user.username, userId: "" });
        }

    })

    app.post('/CreateUser', async (req, res) => {
        if (!req.session.user) {
            res.redirect('/')
        } else {

            const result = await msrv.createMember(req.body)
            if (result.id) {
                res.json({
                    firstname: result.member.firstname,
                    lastname: result.member.lastname,
                    id: result.id,
                    created_datetime: result.member.created_datetime,
                    sport_type : result.member.sport_type
                })
            } else {
                res.error();
            }
        }
    })



    app.post('/SelectMemberByScan', async (req, res) => {
        if (!req.session.user) {
            res.redirect('/');
        } else {

            let memberId = req.body.id
            if (memberId != 0 && memberId != undefined) {
                let result = await msrv.findById(memberId);

                if (result) {
                    let flag = (result.expire_date === dt.getDate()) ? 1 : 0
                    res.json({ result, flag: flag });
                } else {
                    res.error();
                }
            }
        }
    })
}