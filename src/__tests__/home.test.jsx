import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeToggleProvider } from '../components/theme-toggler/theme-toggler';
import Home from '../pages/home';
import { vi, test, expect } from 'vitest';

vi.mock('../components/components-api', () => ({
  default: {
    getPokemons: vi.fn(() => Promise.resolve([])),
    getPokemonByName: vi.fn(() => Promise.resolve({})),
    getPokemonsByType: vi.fn(() => Promise.resolve([])),
  }
}));

test('exibe o título da Pokédex', async () => {
  render(
    <BrowserRouter>
      <ThemeToggleProvider>
        <Home />
      </ThemeToggleProvider>
    </BrowserRouter>
  );

  const titulo = await screen.findByText(/pokédex/i);
  expect(titulo).toBeInTheDocument();
});