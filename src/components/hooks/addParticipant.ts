import { useSetRecoilState } from 'recoil';
import { participantsListState } from "../../state/atom";

export const useAddParticipant = () => {
    const setList = useSetRecoilState(participantsListState);

    return (participantName: string) => {
        return setList(currentList => [...currentList, participantName]);
    }
}