const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../../app').app
const {describe, it} = require('mocha')
chai.use(chaiHttp)

describe('Suite de test de integracion', () =>{
    it('Should return the update pokemon from the team of given user', (done) =>{
        chai.request(app)
            .put('/api/v1/teams/2')
            .send({
                user_id: 2,
                pokemons: 6,
                name: "el senor de la noche"
            })
            .end((err, res) =>{
                chai.assert.equal(res.body.name, "el senor de la noche")
                chai.assert.equal(res.status, 201)
                chai.assert.equal(res.body.pokemons, 6)
            })
        done()
        })
        it('Should return cretae team for user', (done) =>{
        chai.request(app)
            .post('/api/v1/teams')
            .send({
                user_id: 2,
                pokemons: 3,
                name: "nuevo equipo"
            })
            .end((err, res) =>{
                chai.assert.equal(res.body.name, "nuevo equipo")
                chai.assert.equal(res.status, 201)
                chai.assert.equal(res.body.pokemons, 3)
                chai.assert.equal(res.body.id, 3)
            })
        done()
        })
        it('Should return the delete of a team', (done) =>{
            chai.request(app)
                .delete('/api/v1/teams/3')
                .end((err, res) =>{
                    chai.assert.equal(res.status, 202)
                })
            done()
            })
        it('Should return the get a team by id', (done) =>{
            chai.request(app)
                .get('/api/v1/teams/1')
                .set('Authorization', 'jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiQWxpdmllciIsInBhc3N3b3JkIjoicm9vdCJ9.QkKh8PSqfScDxbBsQnmTA98CU7F1N9IdAVmvKyglZrg')
                .end((err, res) =>{
                    chai.assert.equal(res.status, 200)
                    chai.assert.equal(res.body.name, "el magnifico equipo")
                })
                done()
            })
            
})
