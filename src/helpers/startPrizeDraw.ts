import shuffle from 'just-shuffle';

export function startPrizeDraw (participants: string[]) {
    const totalParticipants = participants.length;
    const varied = shuffle(participants);
    const result = new Map<string, string>();

    for (let index = 0; index < participants.length; index++) {
        const friendIndex = index === (totalParticipants - 1) ? 0 : index + 1;
        result.set(varied[index], varied[friendIndex]);
    }

    return result;
}