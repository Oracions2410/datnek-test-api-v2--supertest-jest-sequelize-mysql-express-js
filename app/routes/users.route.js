'use strict'

module.exports = (routes, db, authenticateToken) => {
    const controllerBuilder = require('../../controllers/users.controller')

    const userController = controllerBuilder(db, authenticateToken)

    // routes.get('/users/token', userController.generateToken)
    routes.post('/users', userController.create)
    // routes.get('/users', authenticateToken, UserController.findAll)
    // routes.get('/users/:id', authenticateToken, UserController.findById)
    // routes.put('/users/:id', authenticateToken, UserController.update)
    // routes.delete('/users/:id', authenticateToken, UserController.delete)
}