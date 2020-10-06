'use strict'

module.exports = (db, authGrade) => {
    const md5 = require('md5')
    const uuidv4 = require('uuid').v4()
    const User = db.User

    class UserController {

        async create(req, res) {
            try {

                const {
                    username,
                    email,
                    password
                } = req.body

                if (!(username && email && password)) {
                    return res.status(400).json({
                        error: '***You must provided all fields (username, email, password)',
                        req: req.body
                    })
                }

                const user = new User({
                    slug: uuidv4.replace('-', ''),
                    username,
                    email,
                    password
                })

                await user.save()
                return res.json(user)

            } catch (err) {
                console.log('***The was an error creating a user', err)
                return res.status(500).json(err)
            }
        }
    }

    return new UserController()
}