const router = require('express').Router()
const getTeamsHttp = require('./teams.http')

const passport = require('passport')
require('../auth/auth')(passport)

router.route('/teams')
    .get(getTeamsHttp.getTeams)
    .post(getTeamsHttp.createMyTeam)


router.route('/teams/:id')
    .get(passport.authenticate('jwt', {session: false}), getTeamsHttp.getTeamId)
    .put(getTeamsHttp.updateTeam)
    .delete(getTeamsHttp.deleteTeamId)


exports.router = router