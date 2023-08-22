const request = require("supertest")
const app = require('../src/app.js')


describe('User Registration', () => {
it('returns 200 OK when signup request is valid', (done) => {
    request(app).post('/api/1.0/users').send({
        username: 'user1',
        email: 'user1@gmail.com',
        passwors:'password'
    }).then((res) => {
        expect(res.status).toBe(200)
        done()
    })
})


it('returns response message on successful signup', (done) => {
    request(app).post('/api/1.0/users').send({
        username: 'user1',
        email: 'user1@gmail.com',
        passwors:'password'
    }).then((res) => {
        expect(res.body.message).toBe("user created")
        done()
    })
})
})

it('returns 200 OK when signup request is valid', (done) => {
    request(app).post('/api/1.0/users').send({
        username: 'user1',
        email: 'user1@gmail.com',
        passwors:'password'
    }).then((res) => {
        expect(res.status).toBe(200)
        done()
    })
})


it('returns response message on successful signup', (done) => {
    request(app).post('/api/1.0/users').send({
        username: 'user1',
        email: 'user1@gmail.com',
        passwors:'password'
    }).then((res) => {
        expect(res.body.message).toBe("user created")
        done()
    })
})