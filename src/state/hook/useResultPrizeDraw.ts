import { useRecoilValue } from "recoil"
import { resultadoAmigoSecreto } from "../atom"

export const useResultPrizeDraw = () => {
    return useRecoilValue(resultadoAmigoSecreto)
}