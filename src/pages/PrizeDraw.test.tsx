import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useParticipantsList } from "../state/hook/useParticipantsList";
import { useResultPrizeDraw } from "../state/hook/useResultPrizeDraw";
import PrizeDraw from "./PrizeDraw";

jest.mock('../state/hook/useParticipantsList', () => {
    return {
        useParticipantsList: jest.fn()
    }
})
jest.mock('../state/hook/useResultPrizeDraw', () => {
    return {
        useResultPrizeDraw: jest.fn()
    }
})

describe('PrizeDraw', () => {
    const participants = [
        'Ana',
        'Catarina',
        'Jorel'
    ]
    const resultado = new Map([
        ['Ana', 'Jorel'],
        ['Jorel', 'Catarina'],
        ['Catarina', 'Ana']
    ])

    beforeEach(() => {
        (useParticipantsList as jest.Mock).mockReturnValue(participants);
        (useResultPrizeDraw as jest.Mock).mockReturnValue(resultado);
    })
    test('todos os participants podem exibir o seu amigo secreto', () => {
        render(<RecoilRoot>
            <PrizeDraw />
        </RecoilRoot>)

        const opcoes = screen.queryAllByRole('option')
        expect(opcoes).toHaveLength(participants.length + 1) // pq já vem uma option por padrão
    })
    test('o amigo secreto é exibido quando solicitado', () => {
        render(<RecoilRoot>
            <PrizeDraw />
        </RecoilRoot>)

        const select = screen.getByPlaceholderText('Selecione o seu nome')

        fireEvent.change(select, {
            target: {
                value: participants[0]
            }
        })

        const button = screen.getByRole('button')

        fireEvent.click(button)

        const amigoSecreto = screen.getByRole('alert')

        expect(amigoSecreto).toBeInTheDocument()

    })
})