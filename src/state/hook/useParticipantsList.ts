import { useRecoilValue } from "recoil"
import { ParticipantsListState } from "../atom"

export const useParticipantsList = () => {
    return useRecoilValue(ParticipantsListState)
}