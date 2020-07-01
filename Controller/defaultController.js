const usrv = require("../Service/userSRV")
module.exports = (app) => {

    app.get(`/`, (req, res) => {
        res.render('Login', { error: "" })
    })

    app.post(`/`, async (req, res, next) => {
        try {

            let result = new Array()
            result = await usrv.selectUser(req.body.username, req.body.password);
            if (result.length !== 0) {
                req.session.user = {
                    user_id: result[0].id,
                    username: result[0].username,
                    branch_id: result[0].branch_id
                }
                if (req.session.user) {
                    res.redirect('/HomePage')
                }
            } else {
                res.render('Login', { error: "نام کاربری یا رمز عبور اشتباه است" })
            }

        } catch (e) {
            console.log(e)
            res.sendStatus(500);
            res.render('Login')
        }
    });


    app.get('/HomePage', (req, res) => {
        if (!req.session.user) {
            res.redirect('/')
        } else {
            res.render('HomePage', { username: req.session.user.username })
        }



    })


};