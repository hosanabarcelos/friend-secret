import { useParticipantsList } from "./hooks/useParticipantsList";

const Footer = () => {

    const participants = useParticipantsList();

    return (
        <footer>
            <button disabled={participants.length < 3}>Play</button>
        </footer>
    )
}

export default Footer;