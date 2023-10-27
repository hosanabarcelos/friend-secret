import { useParticipantsList } from "./useParticipantsList"
import { useSetRecoilState } from "recoil";
import { resultFriendSecret } from "../../state/atom";
import { startPrizeDraw } from "../../helpers/startPrizeDraw";

export const usePrizeDraw = () => {
    const participants = useParticipantsList();
    const setResult = useSetRecoilState(resultFriendSecret);

    return () => {
        const result = startPrizeDraw(participants);
        setResult(result);
    }
}