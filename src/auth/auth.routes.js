const router = require('express').Router()

const passport = require('passport')
require('../auth/auth')(passport)

const getAuth = require('./auth.http')

router.route('/auth/login')
    .post(getAuth.loginUser)

exports.router = router