import { useRecoilValue } from "recoil"
import { resultFriendSecret } from "../../state/atom"

export const useReultPrizeDraw = () => {
    return useRecoilValue(resultFriendSecret);
}