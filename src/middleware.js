import  { getPokemon, getAbility } from './utils.js'

const getPokemonMw = async (req, res, next) => {
    const { data } = await getPokemon(req.params.pokemonName)
    res.locals.pokemon = data
    next()
}

const getPokemonAbilitiesMw = async (_req, res) => {
    const { data } = await getAbility(res.locals.pokemon.abilities[0].ability.name)
    res.send(data)
}

export { getPokemonMw, getPokemonAbilitiesMw }