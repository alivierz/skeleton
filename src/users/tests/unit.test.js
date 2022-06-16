//! Estos manejan la respuesta de los controladores
const assert = require('chai').assert
const controllers = require('../users.controllers')
const {describe, it} = require('mocha')

const userDB = {
    1: {
        id: 1,
        name: 'Alivier',
        email: 'alivieralejandro@academlo.com',
        password: 'root',
        age: 21
    },
    2: {
        id: 2,
        name: 'Cristian',
        email: 'cristian@academlo.com',
        password: '1234',
        age: 25
    }
} 

describe('Suite de Testing unitario para los controladores de usuarios' , () =>{
    it('testing to get one user', (done) =>{
        const user = {
            id: 1,
            name: 'Alivier',
            email: 'alivieralejandro@academlo.com',
            password: 'root',
            age: 21
        };
        const result = controllers.getUserById(user.id)
        assert.equal(user.name, result.name)
        assert.equal(user.email, result.email)
        assert.equal(user.password, result.password)
        done()
    })
    it('testing to all data base', (done) =>{
        const result = controllers.getAllUsers();
        assert.isObject(result)
        assert.equal(userDB[1].id, result[1].id)
        assert.equal(userDB[2].id, result[2].id)
        assert.typeOf(result, 'object')
        done()
    })
    it('testing to edit user', (done) =>{
        const body = {
            id: 1,
            name: 'Alivier',
            email: 'alivieralejandro@academlo.com',
            password: '5678',
            age: 21
        }
        const result = controllers.editUser(1, body)
        assert.equal(result.password, body.password)
        assert.equal(result.name, body.name)
        assert.equal(result.email, body.email)
        assert.equal(result.age, body.age)
        done()
    })
    it('testig to create user', (done) =>{
        const body = {
            name: 'Jose',
            email: 'josemoya@academlo.com',
            password: '1234',
            age: 19
        }
        const result = controllers.createUser(body)
        assert.equal(result.name, body.name)
        assert.equal(result.email, body.email)
        assert.equal(result.age, body.age)
        assert.equal(result.id, 4)
        done()
    })
    it('testing delete user', (done) =>{
        const result = controllers.deleteUser(4)
        assert.typeOf(result, 'object')
        assert.equal(Object.keys(userDB).length + 1, Object.keys(result).length)
        done()
    })
})
