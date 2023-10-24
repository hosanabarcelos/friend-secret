import { useParticipantsList } from "./hooks/useParticipantsList";

const ParticipantsList = () => {
    const participants: string[] = useParticipantsList();

    return (
        <ul>
            { participants.map(participant => <li key={participant}>{participant}</li>) }
        </ul>
    )
}

export default ParticipantsList;