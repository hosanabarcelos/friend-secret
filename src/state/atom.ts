import { atom } from 'recoil';

export const participantsListState = atom<string[]>({
    key: 'participantsStateList',
    default: [],
});

export const errorState = atom<string>({
    key: 'errorState',
    default: '',
});

export const resultFriendSecret = atom<Map<string, string>>({
    key: 'resultFriendSecret',
    default: new Map()
});