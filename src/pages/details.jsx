import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import componentsApi from '../components/components-api'
import { DetailsContainer, PokemonImage, PokemonName, InfoText, BackButton } from "../components/layout/style-details"

function Details() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        async function fetchPokemon() {
            const data = await componentsApi.getPokemonById(id)
            setPokemon(data)
        }

        fetchPokemon()
    }, [id])

    if (!pokemon) {
        return <p>Carregando...</p>
    }

    return (
        <DetailsContainer>
            <BackButton onClick={() => navigate(-1)}>← Voltar</BackButton>
            <h2>Detalhes do Pokemon</h2>
            <PokemonImage src={pokemon.image} alt={pokemon.name} />
            <PokemonName>{pokemon.name}</PokemonName>
            <InfoText><strong>Tipo:</strong> {pokemon.types.join(", ")}</InfoText>
            <InfoText><strong>Habilidades:</strong> {pokemon.abilities.join(", ")}</InfoText>
            {pokemon.abilitiesDescription.map((hab, index) => (
                <p key={index} style={{ opacity: 0.7 }}>
                    <strong>{hab.name}:</strong> <em>{hab.description}</em>
                </p>
            ))}
            <InfoText><strong>Moves:</strong> {pokemon.moves.slice(0, 5).join(", ")}</InfoText>
        </DetailsContainer>
    )
}

export default Details