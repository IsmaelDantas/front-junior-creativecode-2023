import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { AuthProvider } from '../../contexts/auth';
import Signin from '../../pages/Signin/Signin';

describe('Signin component', () => {
  it('should render email and password inputs', () => {
    const { getByPlaceholderText } = render(
      <BrowserRouter>
        <AuthProvider>
          <Signin />
        </AuthProvider>
      </BrowserRouter>
    );

    expect(getByPlaceholderText('Digite seu email')).toBeInTheDocument();
    expect(getByPlaceholderText('Digite sua senha')).toBeInTheDocument();
  });

  it('should display error message if email or password are not provided', async () => {
    const { getByText, getByRole } = render(
      <BrowserRouter>
        <AuthProvider>
          <Signin />
        </AuthProvider>
      </BrowserRouter>
    );

    const signinButton = getByRole('button', { name: 'Entrar' });
    fireEvent.click(signinButton);

    await waitFor(() => {
      expect(getByText('Preencha todos os campos!')).toBeInTheDocument();
    });
  });
});
