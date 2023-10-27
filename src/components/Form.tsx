import { useRef, useState } from "react"
import { useAddParticipant } from "../state/hook/useAddParticipant"
import { useErrorMessage } from "../state/hook/useErrorMessage"

import './Form.css'

const Form = () => {

    const [nome, setNome] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const adicionarNaLista = useAddParticipant()

    const mensagemDeErro = useErrorMessage()

    const adicionarparticipant = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        adicionarNaLista(nome)
        setNome('')
        inputRef.current?.focus()
    }

    return (<form onSubmit={adicionarparticipant}>
        <div className="group-input-btn">
            <input
                ref={inputRef}
                value={nome}
                onChange={evento => setNome(evento.target.value)}
                type="text"
                placeholder="Insira os nomes dos participants"
            />
            <button disabled={!nome}>Adicionar</button>
        </div>
        {mensagemDeErro && <p className="alerta erro" role="alert">{mensagemDeErro}</p>}
    </form>)
}

export default Form