import { InitPrizeDraw } from "./initPrizeDraw"

describe('dado um sorteio de amigo secreto', () => {
    test('cada participant não sorteie o próprio nome', () => {

        const participants = [
            'Ana',
            'Catarina',
            'Vinicios',
            'Juliana',
            'João',
            'Nathália'
        ]

        const sorteio = InitPrizeDraw(participants)
        participants.forEach(participant => {
            const amigoScreto = sorteio.get(participant)
            expect(amigoScreto).not.toEqual(participant)
        })

    })
})