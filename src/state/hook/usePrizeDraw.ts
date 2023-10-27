import { useSetRecoilState } from "recoil"
import { resultadoAmigoSecreto } from "../atom"
import { InitPrizeDraw } from "../helpers/initPrizeDraw"
import { useParticipantsList } from "./useParticipantsList"

export const usePrizeDraw = () => {
    const participants = useParticipantsList()
    const setResultado = useSetRecoilState(resultadoAmigoSecreto)
    return () => {
       const resultado = InitPrizeDraw(participants)
        setResultado(resultado)
    }
}