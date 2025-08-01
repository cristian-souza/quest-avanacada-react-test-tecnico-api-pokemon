import styled from "styled-components"

export const FlexContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    padding: 0;
    margin: 2rem 0;
    list-style: none;

    @media (max-width: 768px) {
        gap: 1rem;
        padding: 1rem;
    }
`
export const Card = styled.li`
    width: 160px;
    background-color: ${({ theme }) => theme.cardBackground || '#E6E6FA'};
    color: ${({ theme }) => theme.text};
    border-radius: 12px;
    padding: 1rem;
    text-align: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 500px) {
        width: 100%;
        max-width: 320px;
    }

    img {
        width: 100%;
        height: 96px;
        object-fit: contain;
    }

    p {
        margin-top: 0.5rem;
        font-weight: bold;
        text-transform: capitalize;
    }
`