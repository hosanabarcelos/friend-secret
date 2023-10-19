const Form = () => {
    return (
        <form>
            <input
                type="text"
                placeholder="Insira o nome do participante"
            />
            <button disabled={true}>Adicionar</button>
        </form>
    )
}

export default Form;