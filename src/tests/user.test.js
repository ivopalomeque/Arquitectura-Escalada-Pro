const request = require('supertest')
const app = require('../app')
const mongoose = require('mongoose')

afterAll(async () => {
  await mongoose.connection.close()
})

describe('User API', () => {
  it('should return all users', async () => {
    const res = await request(app).get('/api/users')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('data')
  })
})
