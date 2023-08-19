const request = require("supertest")
const app = require('../app.js')

it('returns 200 OK when signup request is valid', () => {
    request(app).post('/api/1.0/users').send({
        username: 'user1',
        email: 'user1@gmail.com',
        passwors:'password'
    }).expect(200)
})