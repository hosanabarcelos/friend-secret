import { useRecoilValue } from "recoil"
import { errorState } from "../../state/atom"

export const useErrorMessage = () => {
    const message = useRecoilValue(errorState);
    return message;
}