import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeToggleProvider } from '../components/theme-toggler/theme-toggler';
import Home from '../pages/home';
import { act } from 'react';
import { expect } from 'vitest';


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

    getPokemonByName: vi.fn(() =>
      Promise.resolve({
        id: 25,
        name: 'pikachu',
        image: 'https://url.to/pikachu.png',
        types: ['electric'],
        abilities: ['static'],
        moves: [],
      })
    ),

    getPokemonsByType: vi.fn(() => Promise.resolve([])),
  }
}));

test('filtra pokémons por nome digitado', async () => {
  render(
    <BrowserRouter>
      <ThemeToggleProvider>
        <Home />
      </ThemeToggleProvider>
    </BrowserRouter>
  );


  expect(await screen.findByText(/pikachu/i)).toBeInTheDocument();
  expect(await screen.findByText(/bulbasaur/i)).toBeInTheDocument();

  const input = screen.getByPlaceholderText(/buscar por nome/i);

  await act(async () => {
    fireEvent.change(input, { target: { value: 'pika' } });
  });

  expect(await screen.findByText(/pikachu/i)).toBeInTheDocument();
    expect(screen.queryByText(/bulbasaur/i)).not.toBeInTheDocument();

});