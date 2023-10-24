import React from 'react';
import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import ParticipantsList from '../ParticipantsList';
import { useParticipantsList } from '../hooks/useParticipantsList';

jest.mock('', () => {
    return {
        useParticipantsList: jest.fn()
    }
});

describe('Participants empty list', () => {
    beforeEach(() => {
        (useParticipantsList as jest.Mock).mockReturnValue([]);
    });
    test('empty elements', () => {
        render(
            <RecoilRoot>
                <ParticipantsList />
            </RecoilRoot>
        );

        const items = screen.queryAllByRole('listitem')
        expect(items).toHaveLength(0);
    });
});

describe('Participants list', () => {
    beforeEach(() => {
        (useParticipantsList as jest.Mock).mockReturnValue(participants);
    });
    const participants = [
        'Pedro',
        'Daniel',
    ]

    test('with elements', () => {
        render(
            <RecoilRoot>
                <ParticipantsList />
            </RecoilRoot>
        );

        const items = screen.queryAllByRole('listitem')
        expect(items).toHaveLength(participants.length);
    });
});