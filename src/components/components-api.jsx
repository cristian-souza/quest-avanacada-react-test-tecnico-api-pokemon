import axios from "axios"
import { API_BASE } from "./config/api"

const mapPokemonDetails = (data) => ({
    id: data.id,
    name: data.name,
    image: data.sprites.front_default,
    types: data.types.map(t => t.type.name),
    abilities: data.abilities.map(a => a.ability.name),
    moves: data.moves.map(m => m.move.name),
})

const fetchPokemonDetails = async (urlOrName) => {
    try {
        const { data } = await axios.get(
            urlOrName.startsWith("http") ? urlOrName : `${API_BASE}/pokemon/${urlOrName.toLowerCase()}`
        )
        return mapPokemonDetails(data)
    } catch (error) {
        console.error(`Erro ao buscar detalhes de Pokémon (${urlOrName}):`, error.message)
        return null
    }
}

const fetchAbilityDescription = async (ability) => {
    try {
        const { data } = await axios.get(ability.url)
        const pt = data.flavor_text_entries.find(e => e.language.name === "pt")?.flavor_text
        const en = data.flavor_text_entries.find(e => e.language.name === "en")?.flavor_text

        return {
            name: ability.name,
            description: (pt || en || "Descrição indisponível.").replace(/\n|\f/g, " ")
        }
    } catch (error) {
        console.error(`Erro ao buscar descrição da habilidade "${ability.name}":`, error.message)
        return {
            name: ability.name,
            description: "Erro ao buscar descrição."
        }
    }
}

const componentsApi = {
    getPokemons: async (limit = 10, offset = 0) => {
        try {
            const { data } = await axios.get(`${API_BASE}/pokemon?limit=${limit}&offset=${offset}`)
            const detailsPromises = data.results.map(p => fetchPokemonDetails(p.url))
            const results = await Promise.all(detailsPromises)
            return results.filter(Boolean)
        } catch (error) {
            console.error("Erro ao buscar lista de Pokémons:", error.message)
            return []
        }
    },

    getPokemonById: async (id) => {
        try {
            const { data } = await axios.get(`${API_BASE}/pokemon/${id}`)
            const basicDetails = mapPokemonDetails(data)

            const abilitiesWithDescriptions = await Promise.all(
                data.abilities.map(a => fetchAbilityDescription(a.ability))
            )

            return {
                ...basicDetails,
                abilitiesDescription: abilitiesWithDescriptions
            }
        } catch (error) {
            console.error(`Erro ao buscar Pokémon com ID ${id}:`, error.message)
            return null
        }
    },

    getPokemonByName: fetchPokemonDetails,

    getPokemonsByType: async (type, limit = 10, offset = 0) => {
        try {
            const { data } = await axios.get(`${API_BASE}/type/${type.toLowerCase()}`)

            const names = data.pokemon
                .slice(offset, offset + limit)
                .map(p => p.pokemon.name)

            const details = await Promise.all(names.map(name => fetchPokemonDetails(name)))
            return details.filter(Boolean)
        } catch (error) {
            console.error(`Erro ao buscar Pokémons por tipo "${type}":`, error.message)
            return []
        }
    }
}

export default componentsApi