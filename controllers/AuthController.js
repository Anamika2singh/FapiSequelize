const model = require ('../models');
const User = model.User

exports.register = [
    async (req, res) => {
        try {
            let insertData = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email
            }
            console.log(insertData)
            let get = await User.create(insertData)
            console.log(get.dataValues)
            res.json(get.dataValues)
        } catch (err) {
            console.log(err.message)

        }
    }
]
