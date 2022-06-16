const {describe, it} = require('mocha')
const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../../app').app
chai.use(chaiHttp)



describe('Suite de test E2E de AUTH', () => {
    it('Should return 200 and token for succesful login', (done) => {
        chai.request(app)
            .post('/api/v1/auth/login')
            .set('content-type', 'application/json')
            .send({
                email : "sahid.kick@academlo.com" ,
                password : "root" 
            })
            .end((err, res) => {
                const token = res.body.token;
                chai.assert.equal(res.status, 200);
                chai.assert.typeOf(res.body.token, 'string');
                chai.request(app)
                    .get('/api/v1/users/1')
                    .set('Authorization', `JWT ${token}`)
                    .end((err, res) => {
                        chai.assert.equal(res.status, 200);
                        done();
                    });
            });
    });
})