import { expect, vi } from 'vitest'
import { getPokemonMw, getPokemonAbilitiesMw } from '../src/middleware.js'

test('getPokemonMw', async () => {
    const req = { params: { pokemonName: 'ditto' } }
    const res = { locals: {} }
    const next = vi.fn()

    await getPokemonMw(req, res, next)
    expect(res.locals).toHaveProperty('pokemon')
    expect(next).toHaveBeenCalled()
})

test('getPokemonAbilitiesMw', async () => {
    const res = { send: vi.fn(), locals: { pokemon: { abilities: [ { ability: { name: 'speed'} } ] }} }
    const next = vi.fn()

    await getPokemonAbilitiesMw({}, res, next)
    expect(res.locals).toHaveProperty('pokemon')
    expect(res.send).toBeCalledWith({speed: 'fast'})
})