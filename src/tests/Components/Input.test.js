import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from '../../components/Input/Input';

describe('Input', () => {
  it('deve renderizar corretamente', () => {
    render(<Input />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  it('deve exibir o placeholder corretamente', () => {
    const placeholderText = 'Insira seu nome';
    render(<Input placeholder={placeholderText} />);
    const inputElement = screen.getByPlaceholderText(placeholderText);
    expect(inputElement).toBeInTheDocument();
  });

  it('deve exibir o valor corretamente', () => {
    const inputValue = 'Teste';
    render(<Input value={inputValue} />);
    const inputElement = screen.getByDisplayValue(inputValue);
    expect(inputElement).toBeInTheDocument();
  });

  it('deve chamar a função onChange corretamente', () => {
    const mockOnChange = jest.fn();
    render(<Input onChange={mockOnChange} />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'a' } });
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('deve ter o tipo correto', () => {
    const inputType = 'email';
    render(<Input type={inputType} />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement.type).toBe(inputType);
  });
});
