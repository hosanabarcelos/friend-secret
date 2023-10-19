import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from '../Form';

// Jest

test('if the input is empty, do not accept new participants added', () => {
    render(<Form />);

    //encontrar o DOM no input
    const input = screen.getByPlaceholderText('Insira o nome do participante');

    //encontrar o botão
    const button = screen.getByRole('button');

    //garantir que o input esteja no documento
    expect(input).toBeInTheDocument();

    //garantir que o botão esteja desabilitado
    expect(button).toBeDisabled();
});