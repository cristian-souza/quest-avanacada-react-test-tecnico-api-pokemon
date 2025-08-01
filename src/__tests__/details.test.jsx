import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ThemeToggleProvider } from '../components/theme-toggler/theme-toggler.jsx';
import Details from '../pages/details';
import { vi } from 'vitest';

vi.mock('../components/components-api', () => ({
  default: {
    getPokemonById: vi.fn(() =>
      Promise.resolve({
        id: 25,
        name: 'pikachu',
        image: 'https://url.to/pikachu.png',
        types: ['electric'],
        abilities: ['static'],
        moves: ['thunderbolt', 'quick attack', 'iron tail', 'volt tackle', 'growl'],
        abilitiesDescription: [
          { name: 'static', description: 'Has a chance to paralyze on contact.' },
        ],
      })
    ),
  }
}));

test('exibe detalhes do pokémon', async () => {
  render(
    <MemoryRouter initialEntries={['/details/1']}>
      <ThemeToggleProvider>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </ThemeToggleProvider>
    </MemoryRouter>
  );


  await waitFor(() => {
    expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
    expect(screen.getByAltText(/pikachu/i)).toBeInTheDocument();
    expect(screen.getByText(/tipo/i)).toBeInTheDocument();
    expect(screen.getByText(/electric/i)).toBeInTheDocument();
    expect(screen.getByText(/habilidades/i)).toBeInTheDocument();
    expect(screen.getAllByText(/static/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/moves/i)).toBeInTheDocument();
    expect(screen.getByText(/thunderbolt/i)).toBeInTheDocument();
  });
});