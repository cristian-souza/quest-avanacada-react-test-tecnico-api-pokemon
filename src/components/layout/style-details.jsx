import styled from "styled-components"

export const DetailsContainer = styled.div`
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) =>
    theme.background === "#0a192f" ? "#ffffff" : theme.text};
    min-height: 100vh;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`
export const PokemonImage = styled.img`
    width: 180px;
    height: 180px;
    margin-bottom: 1.5rem;
    object-fit: contain;
`

export const PokemonName = styled.h1`
    text-transform: capitalize;
    font-size: 2.5rem;
    margin-bottom: 1rem;
`

export const InfoText = styled.p`
    margin: 0.5rem 0;
    font-size: 1rem;
    line-height: 1.4;
`

export const BackButton = styled.button`
    align-self: flex-start;
    margin-bottom: 2rem;
    padding: 0.5rem 1rem;
    background-color: transparent;
    color: ${({ theme }) => theme.isDark ? '#fff' : '#000'};
    border: 1px solid ${({ theme }) => theme.text};
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.2s ease;

    &:hover {
        background-color: ${({ theme }) => theme.text};
        color: ${({ theme }) =>
            theme.background === '#0a192f' ? '#fff' : theme.background};
    }
`