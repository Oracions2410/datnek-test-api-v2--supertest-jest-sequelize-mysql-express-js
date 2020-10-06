'use strict'

module.exports = (routes, db, authGrade) => {
    require('./users.route')(routes, db, authGrade.authenticateToken)
}