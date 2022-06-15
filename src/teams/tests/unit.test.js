//! Estos manejan la respuesta de los controladores
const assert = require('chai').assert
const controllers = require('../teams.controllers')
const {describe , it} = require('mocha')
/*
const teamsDB = {
    1: {
        id: 1,
        user_id: 1,
        pokemons: 6,
        name: "el magnifico equipo"
    },
    2:  {
        id: 2,
        user_id: 2,
        pokemons: 5,
        name: "el senor de la noche"
    }
}
*/
describe('Suite de Testing unitario para los controladores de teams' , () =>{
    it('testing to get one team', (done) =>{
        const team = {
            id: 2,
            user_id: 2,
            pokemons: 5,
            name: "el senor de la noche"
        };
        const result = controllers.getTeamById(team.id)
        assert.equal(team.user_id, result.user_id)
        assert.equal(team.name, result.name)
        done()
    })
    it('Should be return a new team', (done) => {
        const newTeam = {
            user_id: 1,
            pokemons: 4,
            name: "nuevo equipo"
        }
        const result = controllers.createTeam(newTeam)   
        
        assert.equal(result.id, 3)
        assert.equal(result.name, newTeam.name)
        done()
    })
    it('Testing delete team form db', (done) =>{
        const result = controllers.deleteTeam(1)
        assert.typeOf(result, 'object')
        assert.equal(Object.keys(result).length, 2)
        done()
    })
    it('Testing updating/edit team form db', (done) =>{
        const newOBtion = {
            id: 3,
            user_id: 1,
            pokemons: 2,
            name: "el senor del dia"
        }
        const result = controllers.editTeam(3, newOBtion)
        assert.typeOf(result, 'object')
        assert.equal(result.name, newOBtion.name)
        assert.equal(result.id, newOBtion.id)
        done()
    })
})
