import styled from "styled-components";
import types from "./types-pokemos/types-pokemons";

export const FilterWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  input,
  select {
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => (theme.background === "#0a192f" ? "#ffffff" : theme.text)};
    border: 1px solid ${({ theme }) => (theme.background === "#0a192f" ? "#ffffff" : theme.text)};
    transition: border 0.2s ease;

    &:focus {
      outline: 2px solid ${({ theme }) => theme.text};
    }
  }

  input::placeholder {
    color: ${({ theme }) => (theme.background === "#0a192f" ? "rgba(255, 255, 255, 0.6)" : "#666")};
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0;
  line-height: 1;

  &:focus {
    outline: none;
  }
`;

function Filter({ searchName, setSearchName, searchType, setSearchType }) {
  return (
    <FilterWrapper>
      <InputWrapper>
        <input
          type="text"
          placeholder="Buscar por nome..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        {searchName && (
          <ClearButton onClick={() => setSearchName("")} aria-label="Limpar busca">
            ×
          </ClearButton>
        )}
      </InputWrapper>

      <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
        {types.map((type) => (
          <option key={type.value} value={type.value}>{type.label}</option>
        ))}
      </select>
    </FilterWrapper>
  );
}

export default Filter;