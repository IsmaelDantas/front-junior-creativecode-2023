import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { AuthProvider, AuthContext } from '../../contexts/auth';

describe("Testes para o contexto Auth", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("deve renderizar o AuthProvider corretamente", () => {
    render(
        <AuthProvider>
          <AuthContext.Consumer>
            {(value) => (
              <>
                <div data-testid="user-email">{value.user?.email}</div>
                <div data-testid="signed">{value.signed.toString()}</div>
              </>
            )}
          </AuthContext.Consumer>
        </AuthProvider>
      );
  
      const userEmailElement = screen.getByTestId("user-email");
      const signedElement = screen.getByTestId("signed");
  
      expect(userEmailElement).toBeInTheDocument();
      expect(signedElement).toBeInTheDocument();
      expect(userEmailElement.textContent).toBe("");
      expect(signedElement.textContent).toBe("false");
    });
  });