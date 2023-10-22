import { atom } from 'recoil';

export const participantsListState = atom<string[]>({
    key: 'participantsStateList',
    default: [],
});