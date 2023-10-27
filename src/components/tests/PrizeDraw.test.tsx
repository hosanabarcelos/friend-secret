import React from 'react';
import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { useParticipantsList } from '../hooks/useParticipantsList';
import PrizeDraw from '../../pages/PrizeDraw';

jest.mock('', () => {
    return {
        useParticipantsList: jest.fn()
    }
});

describe('PrizeDrae Page', () => {
    const participants = [
        'Pedro',
        'Daniel'
    ]

    beforeEach(() => {
        (useParticipantsList as jest.Mock).mockReturnValue(participants);
    });

    test('all participants can show off their secret friend', () => {
        render(<RecoilRoot>
            <PrizeDraw />
        </RecoilRoot>)

        const options = screen.queryAllByRole('option');
        expect(options).toHaveLength(participants.length);
    });
});