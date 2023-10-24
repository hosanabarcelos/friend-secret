import { useRecoilValue } from "recoil";
import { participantsListState } from "../../state/atom"

export const useParticipantsList = () => {
    return useRecoilValue(participantsListState);
}