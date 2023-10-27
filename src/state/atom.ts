import { atom } from "recoil";

export const ParticipantsListState = atom<string[]>({
    key: 'ParticipantsListState',
    default: []
})

export const resultadoAmigoSecreto = atom<Map<string, string>>({
    key: 'resultadoAmigoSecreto',
    default: new Map()
})

export const erroState = atom<string>({
    key: 'erroState',
    default: ''
})