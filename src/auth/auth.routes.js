const router = require('express').Router()
const getAuth = require('./auth.http')

router.route('/auth/login')
    .post(getAuth.loginUser)
router.route('/post')

exports.router = router