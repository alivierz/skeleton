const teamControllers = require('./teams.controllers')

const getTeams = (req, res) =>{
    res.status(200).json(teamControllers.getAllTeam())
}
const getTeamId = (req, res) =>{
    res.status(200).json(teamControllers.getTeamById(req.params.id))
}
const deleteTeamId = (req, res) =>{
    res.status(202).json(teamControllers.deleteTeam(req.params.id))
}
const updateTeam = (req, res) =>{
    res.status(201).json(teamControllers.editTeam(req.params.id, req.body))
}
const  createMyTeam = (req, res) =>{
    res.status(201).json(teamControllers.createTeam(req.body))
}
module.exports = {
    getTeams,
    getTeamId,
    deleteTeamId,
    updateTeam,
    createMyTeam
}