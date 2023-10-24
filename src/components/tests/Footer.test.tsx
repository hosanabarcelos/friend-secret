import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Footer from "../Footer";
import { useParticipantsList } from "../hooks/useParticipantsList";

jest.mock('', () => {
    return {
        useParticipantsList: jest.fn()
    }
});

const mockNavigation = jest.fn();

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigation
    }
})

describe('When there were not enough participants', () => {
    beforeEach(() => {
        (useParticipantsList as jest.Mock).mockReturnValue([]);
    });

    test('the game cannot start', () => {
        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        );

        const button = screen.getByRole('button');

        expect(button).toBeDisabled();
    });
});

describe('When there were enough participants', () => {
    beforeEach(() => {
        (useParticipantsList as jest.Mock).mockReturnValue(['Pedro', 'Daniel']);
    });
    test('the game can start', () => {
        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        );

        const button = screen.getByRole('button');

        expect(button).not.toBeDisabled();
    });

    test('play', () => {
        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        );

        const button = screen.getByRole('button');

        fireEvent.click(button);

        expect(mockNavigation).toHaveBeenCalledTimes(1);
        expect(mockNavigation).toHaveBeenCalledWith('/sorteio');
    });
});
