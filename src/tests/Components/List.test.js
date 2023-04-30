import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import List from '../../components/List/List';

describe('Componente List', () => {
  const mockDir = [
    { name: 'Eduardo Matarazzo', tel: '55994221658' },
    { name: 'Joana Pimentel', tel: '71998563149' }
  ];

  test('deve renderizar a lista corretamente', () => {
    render(<List dir={mockDir} />);
    
    expect(screen.getByText(/Eduardo Matarazzo - 55994221658/i)).toBeInTheDocument();
    expect(screen.getByText(/Joana Pimentel - 71998563149/i)).toBeInTheDocument();
  });

  test('deve chamar a função de visualizar ao clicar no botão de visualizar', () => {
    const mockViewFunction = jest.fn();
    render(<List dir={mockDir} view={mockViewFunction} />);
    
    const viewButton = screen.getAllByText(/ver/i)[0];
    fireEvent.click(viewButton);
    
    expect(mockViewFunction).toHaveBeenCalled();
  });

  test('deve chamar a função de editar ao clicar no botão de editar', () => {
    const mockEditFunction = jest.fn();
    render(<List dir={mockDir} edit={mockEditFunction} />);
    
    const editButton = screen.queryAllByText(/editar/i)[0];
    fireEvent.click(editButton);
    
    expect(mockEditFunction).toHaveBeenCalled();
  });

  test('deve chamar a função de remover ao clicar no botão de remover', () => {
    const mockRemoveFunction = jest.fn();
    render(<List dir={mockDir} remove={mockRemoveFunction} />);
  
    const removeButtons = screen.queryAllByText(/deletar/i);
    const firstRemoveButton = removeButtons[0];
    fireEvent.click(firstRemoveButton);
  
    expect(mockRemoveFunction).toHaveBeenCalled();
  });
});
