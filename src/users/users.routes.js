const router = require('express').Router()

const passport = require('passport')
require('../auth/auth')(passport)

const getUserRoute = require('./users.http')

router.route('/users')
    .get(getUserRoute.getUsers)
    .post(getUserRoute.createMyUser)

router.route('/users/:id')
    .get(passport.authenticate('jwt', {session: false}), getUserRoute.getUserId)
    .put(getUserRoute.editMyUser)
    .delete(getUserRoute.deleteMyUser)

exports.router = router