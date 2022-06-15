const {describe, it, before} = require('mocha')
const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../../app').app
const userContollers = require('../../users/users.controllers')
chai.use(chaiHttp)

before(() => {
    userContollers.createUser({
        name: 'Admin',
        email: 'alivieralejandro@academlo.com',
        password: 'root',
        username: 'admin',
        age: 21,
        image_profile: '',
    });
});


describe('Suite de testing de integracion para AUTH', () =>{
    it('Should return 401 when no jwt avalaible', (done) =>{
        chai.request(app)
            .get('/api/v1/users/1')
            .end((err, res) =>{
                chai.assert.equal(res.status, 401)
                done()
            })
    })
    it('Should return 400 when  no data id provided', (done) =>{
        chai.request(app)
            .post('/api/v1/auth/login')
            .end((err, res) =>{
                chai.assert.equal(res.status, 400)
                done()
            })
    })
    it('Should return 200 when  jwt is valid', (done) =>{
        chai.request(app)
            .post('/api/v1/auth/login')
            .set("content-type", "aplication/json")
            .send({
                email: "alivieralejandro@academlo.com",
                password: "root"
            })
            .end((err, res) =>{
                console.log(res.body)
                chai.assert.equal(res.status, 200)
                done()
            })
    })
})