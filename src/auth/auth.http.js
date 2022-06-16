const authControllers = require('./auth.controllers')
const userContollers = require('../users/users.controllers')
const config = require('../../config')
const jwt = require('jsonwebtoken')

const loginUser = (req, res) => {
    if(!req.body){
        return res.status(400).json({message: "Missing data"})
    } else if (!req.body.email || !req.body.password){
        return res.status(400).json({message: "Missing data"})
    }
    const response = authControllers.checkUsersCredential(req.body.email, req.body.password)

    if(!response){
        return res.status(401).json({message: 'Invalid Credential'})
    }

    const user = userContollers.getUserByEmail(req.body.email)
    const token = jwt.sign({
        id: user.id,
        email: req.body.email
    }, config.secretWord)
    res.status(200).json({token: token})
}

module.exports = {
    loginUser
}