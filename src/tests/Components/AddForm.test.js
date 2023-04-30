import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddForm from '../../components/AddForm/AddForm';

describe('Componente AddForm', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('Deve renderizar o compontente de forma correta', () => {
    render(<AddForm />);

    expect(screen.getByText(/salvar/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/nome/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/telefone/i)).toBeInTheDocument();
  });

  test('Deve adicionar um novo item no diretório', () => {
    render(<AddForm />);

    const nameInput = screen.getByPlaceholderText(/coloque um nome/i);
    const telInput = screen.getByPlaceholderText(/coloque um telefone/i);
    const saveButton = screen.getByText(/salvar/i);

    fireEvent.change(nameInput, { target: { value: 'Eliel Dantas' } });
    fireEvent.change(telInput, { target: { value: '88994868113' } });
    fireEvent.click(saveButton);

    expect(screen.getByText(/eliel dantas/i)).toBeInTheDocument();
    expect(screen.getByText(/88994868113/i)).toBeInTheDocument();
  });

  test('Deve editar um item da lista', () => {
    localStorage.setItem('dir', JSON.stringify([{ name: 'Lucielma Costa', tel: '88994111967' }]));
    render(<AddForm />);
    
    const editButton = screen.getByText(/editar/i);
    fireEvent.click(editButton);
    
    const nameInput = screen.getByPlaceholderText(/nome/i);
    const telInput = screen.getByPlaceholderText(/telefone/i);
    const updateButton = screen.getByTestId('update-button');
    
    fireEvent.change(nameInput, { target: { value: 'Lucielma Costa' } });
    fireEvent.change(telInput, { target: { value: '88994111697' } });
    fireEvent.click(updateButton);
    
    expect(screen.getByText(/lucielma costa/i)).toBeInTheDocument();
    expect(screen.getByText(/88994111697/i)).toBeInTheDocument();
  });

  test('Deve remover um item da lista', () => {
    localStorage.setItem('dir', JSON.stringify([{ name: 'Ismael Dantas', tel: '88994868113' }]));
    render(<AddForm />);

    const removeButton = screen.getByText(/deletar/i);
    fireEvent.click(removeButton);

    expect(screen.queryByText(/ismael dantas/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/88994868113/i)).not.toBeInTheDocument();
  });

  test('Deve ver um item da lista', () => {
    localStorage.setItem('dir', JSON.stringify([{ name: 'Renata Montero', tel: '48992548963' }]));
    render(<AddForm />);
    const viewButton = screen.getByText(/ver/i);
    fireEvent.click(viewButton);
    expect(screen.getByText(/Renata Montero\s+-\s+48992548963/i)).toBeInTheDocument();
  });
});
