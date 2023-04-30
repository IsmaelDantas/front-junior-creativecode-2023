import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Signup from '../../pages/Signup/Signup';

describe('Signup component', () => {
  test('renders input fields and button', () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );
    const emailInput = screen.getByPlaceholderText(/Digite seu email/i);
    const emailConfInput = screen.getByPlaceholderText(/Confirme seu email/i);
    const passwordInput = screen.getByPlaceholderText(/Digite sua senha/i);
    const button = screen.getByRole('button', { name: /registrar/i });
    expect(emailInput).toBeInTheDocument();
    expect(emailConfInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('shows error message when input fields are empty', () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );
    const button = screen.getByRole('button', { name: /registrar/i });
    fireEvent.click(button);
    const errorMessage = screen.getByText(/preencha todos os campos!/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('shows error message when emails do not match', () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );
  
    const emailInput = screen.getByPlaceholderText(/Digite seu email/i);
    const emailConfInput = screen.getByPlaceholderText(/Confirme seu email/i);
    const password = screen.getByPlaceholderText(/Digite sua senha/i);
    const button = screen.getByRole('button', { name: /registrar/i });
  
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(emailConfInput, { target: { value: 'test2@test.com' } });
    fireEvent.change(password, { target: { value: '1234' } });
    fireEvent.click(button);
  
    const errorMessage = screen.getByText(
      /Os emails não coincidem!/i
    );
  
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toBeVisible();
  });
});