import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Form from "./Form";


describe('o comportamento do Form.tsx', () => {
    test('if is empty, not started', () => {
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>)
        // encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participants')
        // encontrar o botão
        const button = screen.getByRole('button')
        // garantir que o input esteja no documento
        expect(input).toBeInTheDocument()
        // garantir que o botão esteja desabilitado
        expect(button).toBeDisabled()
    })

    test('add participant', () => {
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>)

        // encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participants')
        // encontrar o botão
        const button = screen.getByRole('button')

        // inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        })

        // clicar no botão de submeter
        fireEvent.click(button)

        // garantir que o input esteja com o foco ativo
        expect(input).toHaveFocus()
        // garantir que o input não tenha um valor
        expect(input).toHaveValue("")
    })

    test('not two names', () => {
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>)
        const input = screen.getByPlaceholderText('Insira os nomes dos participants')
        const button = screen.getByRole('button')
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        })
        fireEvent.click(button)
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        })
        fireEvent.click(button)

        const errorMessage = screen.getByRole('alert')

        expect(errorMessage.textContent).toBe('Nomes duplicados não são permitidos!')
    })

    test('after time, display error message', () => {
        jest.useFakeTimers()
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>)
        const input = screen.getByPlaceholderText('Insira os nomes dos participants')
        const button = screen.getByRole('button')
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        })
        fireEvent.click(button)
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        })
        fireEvent.click(button)
        let errorMessage = screen.queryByRole('alert')
        expect(errorMessage).toBeInTheDocument()

        act(() => {
            jest.runAllTimers()
        });

        errorMessage = screen.queryByRole('alert')
        expect(errorMessage).toBeNull()
    })
})


