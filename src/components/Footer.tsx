import { useNavigate } from "react-router-dom"
import { useParticipantsList } from "../state/hook/useParticipantsList"
import { usePrizeDraw } from '../state/hook/usePrizeDraw';

import './Footer.css'

const Footer = () => {

    const participants = useParticipantsList()

    const navigateTo = useNavigate()

    const init = usePrizeDraw()

    const start = () => {
        init()
        navigateTo('/PrizeDraw')
    }

    return (<footer className="footer-settings">
        <button className="button" disabled={participants.length < 3} onClick={start}>Iniciar</button>
        <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
    </footer>)
}

export default Footer;