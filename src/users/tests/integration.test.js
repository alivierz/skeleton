const {describe, it} = require('mocha')
const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../../app').app
chai.use(chaiHttp)
/*
describe('Suite de test de integracion', () =>{
    it('Should return the user for id', (done) =>{
        chai.request(app)
            .get('/api/v1/users/1')
            .set('Authorization', 'jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiQWxpdmllciIsInBhc3N3b3JkIjoicm9vdCJ9.QkKh8PSqfScDxbBsQnmTA98CU7F1N9IdAVmvKyglZrg')
            .end((err, res) =>{
                chai.assert.equal(res.status, 200)
                chai.assert.equal(res.body.name, "Alivier")
                chai.assert.equal(res.body.id, 1)
            })
        done()
        })
    it('Should return new User', (done) =>{
        chai.request(app)
            .post('/api/v1/users')
            .send({ name: 'Max',
                    email: 'maximaxin@academlo.com',
                    password: 'stranger',
                    age: 18
                })
            .end((err, res) =>{
                chai.assert.equal(res.body.name, "Max")
                chai.assert.equal(res.body.email, "maximaxin@academlo.com")
                chai.assert.typeOf(res.body, 'object')
                chai.assert.equal(res.body.id, 3)
            })
        done()
    })
    it('Should return udate user', (done) =>{
        chai.request(app)
            .put('/api/v1/users/3')
            .send({ name: 'maxine',
                    email: 'maximilian@academlo.com',
                    password: 'strangerthings',
                    age: 19
                })
            .end((err, res) =>{
                chai.assert.equal(res.body.name, "maxine")
                chai.assert.equal(res.body.email, "maximilian@academlo.com")
                chai.assert.typeOf(res.body, 'object')
                chai.assert.equal(res.body.id, 3)
            })
        done()
    })
    it('Should return delete user', (done) =>{
        chai.request(app)
            .delete('/api/v1/users/3')
            .end((err, res) =>{
                chai.assert.equal(res.status, 202)
            })
        done()
    })
})
*/