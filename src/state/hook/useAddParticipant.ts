import { useRecoilValue, useSetRecoilState } from "recoil"
import { erroState, ParticipantsListState } from "../atom"

export const useAddParticipant = () => {
    const setLista = useSetRecoilState(ParticipantsListState)
    const lista = useRecoilValue(ParticipantsListState)
    const setErro = useSetRecoilState(erroState)
    return (nomeDoparticipant: string) => {
        if (lista.includes(nomeDoparticipant)) {
            setErro('Nomes duplicados não são permitidos!')
            setTimeout(() => {
                setErro("")
            }, 5000)
            return
        }
        return setLista(listaAtual => [...listaAtual, nomeDoparticipant])
    }
}