const controllers = require('./users.controllers')

const getUsers = (req, res) =>{
    res.status(200).json(controllers.getAllUsers())
}
const getUserId = (req, res) =>{
    res.status(200).json(controllers.getUserById(req.params.id))
}
const editMyUser = (req, res) =>{
    res.status(201).json(controllers.editUser(req.params.id, req.body))
}
const createMyUser = (req, res) =>{
    res.status(201).json(controllers.createUser(req.body))
}
const deleteMyUser = (req, res) =>{
    res.status(202).json(controllers.deleteUser(req.params.id))
}
module.exports = {
    getUsers,
    getUserId,
    editMyUser,
    createMyUser,
    deleteMyUser
}