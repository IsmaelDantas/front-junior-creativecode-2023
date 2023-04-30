import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../../components/Button/Button';

describe('Button', () => {
  it('deve renderizar corretamente', () => {
    render(<Button Text="Clique aqui" />);
    const buttonElement = screen.getByText('Clique aqui');
    expect(buttonElement).toBeInTheDocument();
  });

  it('deve chamar a função onClick corretamente', () => {
    const mockOnClick = jest.fn();
    render(<Button Text="Clique aqui" onClick={mockOnClick} />);
    const buttonElement = screen.getByText('Clique aqui');
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('deve ter o tipo correto', () => {
    const buttonType = 'submit';
    render(<Button Text="Enviar" Type={buttonType} />);
    const buttonElement = screen.getByText('Enviar');
    expect(buttonElement.type).toBe(buttonType);
  });
});
