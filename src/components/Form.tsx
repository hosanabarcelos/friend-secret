import { useRef, useState } from "react";
import { useAddParticipant } from "./hooks/addParticipant";

const Form = () => {
    const [name, setName] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    const add = useAddParticipant();

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
        </form>
    )
}

export default Form;