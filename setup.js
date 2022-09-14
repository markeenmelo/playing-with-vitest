import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { rest } from 'msw'


export const restHandlers = [
  rest.get('https://pokeapi.co/api/v2/pokemon/ditto', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({abilities: [{ability: {name: 'speed'}}]}))
  }),
  rest.get('https://pokeapi.co/api/v2/ability/speed', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({speed: 'fast'}))
  }),
]


const server = setupServer(...restHandlers)

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }))

//  Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())
