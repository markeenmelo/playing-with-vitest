import express from 'express'

import { getPokemonMw, getPokemonAbilitiesMw } from './middleware.js'

const app = express()

app.use(express.json())

app.get('/:pokemonName', getPokemonMw, getPokemonAbilitiesMw)

export default app