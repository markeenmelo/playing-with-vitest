import axios from 'axios'

const getPokemon = async pokemonName => await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
const getAbility = async abilityName => await axios.get(`https://pokeapi.co/api/v2/ability/${abilityName}`)

export { getPokemon, getAbility }