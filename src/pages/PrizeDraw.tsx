// src/paginas/PrizeDraw.tsx
import { useState } from "react"
import Card from "../components/Card"
import { useParticipantsList } from "../state/hook/useParticipantsList"
import { useResultPrizeDraw } from "../state/hook/useResultPrizeDraw"

import './PrizeDraw.css'

const PrizeDraw = () => {

    const participants = useParticipantsList()

    const [participantDaVez, setparticipantDaVez] = useState('')
    const [amigoScreto, setAmigoSecreto] = useState('')

    const resultado = useResultPrizeDraw()

    const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        if (resultado.has(participantDaVez)) {
            setAmigoSecreto(resultado.get(participantDaVez)!)
        }
    }

    return (<Card>
        <section className="PrizeDraw">
            <h2>Quem vai tirar o papelzinho?</h2>
            <form onSubmit={sortear}>
                <select
                    required
                    name="participantDavez"
                    id="participantDavez"
                    placeholder="Selecione o seu nome"
                    value={participantDaVez}
                    onChange={evento => setparticipantDaVez(evento.target.value)}
                >
                    <option>Selecione seu nome</option>
                    {participants.map(participant => <option key={participant}>{participant}</option>)}
                </select>
                <p>Clique em em sortear para ver quem é seu amigo secreto!</p>
                <button className="button-sortear">Sortear</button>
            </form>
            {amigoScreto && <p className="resultado" role="alert">{amigoScreto}</p>}
            <footer className="PrizeDraw">
                <img src="/imagens/aviao.png" className="aviao" alt="Um desenho de um avião de papel" />
            </footer>
        </section>
    </Card>)
}

export default PrizeDraw