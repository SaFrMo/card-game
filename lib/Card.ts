interface Effect {
    type: ActionType
    amount: number
}

enum ActionType {
    ATTACK,
    DEFEND
}

export default class Card {
    name: string
    cost: number
    text: string
    effect: Effect

    //https://gist.github.com/ericelliott/f3c2a53a1d4100539f71
    constructor({
        name = 'Card Name',
        cost = 0,
        text = 'Text describing card effects.',
        effect = {
            type: ActionType.ATTACK,
            amount: 1
        }
    } = {}) {
        // set values
        this.name = name
        this.cost = cost
        this.text = text
        this.effect = effect
    }
}
