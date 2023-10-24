import { useRef, useState } from "react";
import { useAddParticipant } from "./hooks/useAddParticipant";
import { useErrorMessage } from "./hooks/useErrorMessage";

const Form = () => {
    const [name, setName] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    const add = useAddParticipant();

    const errorMessage = useErrorMessage();

    const addParticipant = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        add(name);
        setName('');
        inputRef.current?.focus();
    }

    return (
        <form onSubmit={addParticipant }>
            <input
                ref={inputRef}
                value={name}
                onChange={event => setName(event.target.value)}
                type="text"
                placeholder="Insira o nome do participante"
            />
            <button disabled={!name}>Adicionar</button>
            {errorMessage && <p role="alert">{ errorMessage }</p>}
        </form>
    )
}

export default Form;