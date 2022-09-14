import { getAbility, getPokemon } from "../src/utils.js"

test('getPokemon', async () => {
    await expect(getPokemon('ditto')).resolves.toHaveProperty('data.abilities')
})

test('getAbility', async () => {
    await expect(getAbility('speed')).resolves.toHaveProperty('data.speed')
})