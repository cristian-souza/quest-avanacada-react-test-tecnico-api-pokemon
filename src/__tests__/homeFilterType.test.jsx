import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeToggleProvider } from '../components/theme-toggler/theme-toggler';
import Home from '../pages/home';
import { expect, test, vi } from 'vitest';


vi.mock('../components/components-api', () => ({
  default: {
  getPokemons: vi.fn(() => Promise.resolve([
    {
      id: 25,
      name: 'pikachu',
      image: 'https://url.to/pikachu.png',
      types: ['electric'],
      abilities: ['static'],
      moves: [],
    },

    {
      id: 2,
      name: 'bulbasaur',
      image: 'https://url.to/bulbasaur.png',
      types: ['grass'],
      abilities: ['overgrow'],
      moves: [],
    },
  ])),

  getPokemonByName: vi.fn(() => Promise.resolve({})),
  getPokemonsByType: vi.fn((type) => {
    if (type === 'electric') {
      return Promise.resolve([
        {
          id: 25,
          name: 'pikachu',
          image: 'https://url.to/pikachu.png',
          types: ['electric'],
          abilities: ['static'],
          moves: [],
        }
      ]);
    }
    return Promise.resolve([]);
  }),
}
}));

test('filtra pokémons por tipo selecionado', async () => {
  render(
    <BrowserRouter>
      <ThemeToggleProvider>
        <Home />
      </ThemeToggleProvider>
    </BrowserRouter>
  );

  expect(await screen.findByText(/pikachu/i)).toBeInTheDocument();
  expect(await screen.findByText(/bulbasaur/i)).toBeInTheDocument();

  const select = screen.getByRole('combobox'); 
  fireEvent.change(select, { target: { value: 'electric' } });


  expect(await screen.findByText(/pikachu/i)).toBeInTheDocument();

  await waitFor (()=> {
  expect(screen.queryByText(/bulbasaur/i)).not.toBeInTheDocument();
  })
  
});