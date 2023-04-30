import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../pages/Home/Home';

describe('Componente Home', () => {
  test('Renderiza o componente home', () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const title = screen.getByText(/Catálogo Telefônico/i);
    const addButton = screen.getByRole('button', { name: /Salvar/i });
    const signOutButton = screen.getByRole('button', { name: /sair/i });
    expect(title).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    expect(signOutButton).toBeInTheDocument();
  });
});
