const { category } = require('../models')



async function authorizationAdmin(req, res, next) {
    let { id, name, position, email } = req.userData

    try {
        if (position !== "admin") {
            throw { msg: `Kamu tidak terotorisasi untuk ini, hubungi Admin`, status: 404 }
        }
        else {

            next()
        }

    }
    catch (err) {
        next(err)
    }
}


module.exports = authorizationAdmin
