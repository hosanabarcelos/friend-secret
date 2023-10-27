import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useParticipantsList } from "../state/hook/useParticipantsList";
import Footer from "./Footer";

jest.mock('../state/hook/useParticipantsList', () => {
    return {
        useParticipantsList: jest.fn()
    }
})

const mockNavigation = jest.fn()
const mockPrizeDraw = jest.fn()

jest.mock('../state/hook/usePrizedraw', () => {
    return {
        usePrizedraw: () => mockPrizeDraw
    }
})

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigation
    }
})

describe('empty participants', () => {
    beforeEach(() => {
        (useParticipantsList as jest.Mock).mockReturnValue([])
    })
    test('a brincadeira não pode ser iniciada', () => {
        render(<RecoilRoot>
            <Footer />
        </RecoilRoot>)
        const button = screen.getByRole('button')
        expect(button).toBeDisabled()
    })
})

describe('has participants', () => {
    beforeEach(() => {
        (useParticipantsList as jest.Mock).mockReturnValue(['Ana', 'Catarina', 'Josefina'])
    })
    test('init', () => {
        render(<RecoilRoot>
            <Footer />
        </RecoilRoot>)
        const button = screen.getByRole('button')
        expect(button).not.toBeDisabled()
    })
    test('play', () => {
        render(<RecoilRoot>
            <Footer />
        </RecoilRoot>)
        const button = screen.getByRole('button')
        fireEvent.click(button)

        expect(mockNavigation).toHaveBeenCalledTimes(1)
        expect(mockNavigation).toHaveBeenCalledWith('/PrizeDraw')
        expect(mockPrizeDraw).toHaveBeenCalledTimes(1)
    })
})