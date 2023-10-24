import { useNavigate } from "react-router-dom";
import { useParticipantsList } from "./hooks/useParticipantsList";

const Footer = () => {

    const participants = useParticipantsList();

    const navigationTo = useNavigate();

    const start = () => {
        navigationTo('/sorteio');
    }

    return (
        <footer>
            <button disabled={participants.length < 3} onClick={start}>Play</button>
        </footer>
    )
}

export default Footer;