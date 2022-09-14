import request from 'supertest'
import { expect } from 'vitest'
import app from '../src/server.js'

test('should return api response', async () => {
  const result = await request(app).get('/ditto')
  expect(result.statusCode).toEqual(200)
  expect(result.body).toEqual({ speed: 'fast' })
})