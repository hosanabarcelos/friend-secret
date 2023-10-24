import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Form from '../Form';
import { RecoilRoot } from 'recoil';

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

test('if the name is filled in, add participant', () => {
    render(
        <RecoilRoot>
            <Form />
        </RecoilRoot>
    );

    //encontrar o DOM no input
    const input = screen.getByPlaceholderText('Insira o nome do participante');

    //encontrar o botão
    const button = screen.getByRole('button');

    //inserir valor de input
    fireEvent.change(input, {
        target: {
            value: 'Pedro Astronauta'
        }
    });

    //submeter formulário
    fireEvent.click(button);

    //garantir que o input esteja com foco ativo
    expect(input).toHaveFocus();

    //garantir que o input não tenha um valor
    expect(input).toHaveValue('');
});