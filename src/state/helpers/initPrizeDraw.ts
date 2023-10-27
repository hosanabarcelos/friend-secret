import shuffle from "just-shuffle";

export function InitPrizeDraw (participants: string[]) {
    const  totalDeparticipants = participants.length
    const embaralhado = shuffle(participants)
    const resultado = new Map<string, string>()
    for (let index = 0; index < totalDeparticipants; index++) {
        const indiceDoAmigo = index === (totalDeparticipants - 1) ? 0 : index + 1;
        resultado.set(embaralhado[index], embaralhado[indiceDoAmigo])
    }
    return resultado
}