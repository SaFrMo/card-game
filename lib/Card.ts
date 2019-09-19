interface Effect {
    type: string
    amount: number
}

export default class Card {
    name: string
    cost: number
    text: string
    flavorText: string
    effect: Effect

    //https://gist.github.com/ericelliott/f3c2a53a1d4100539f71
    constructor({
        name = 'Card Name',
        cost = 0,
        text = '',
        flavorText = '',
        effect = {
            type: 'attack',
            amount: 1
        }
    } = {}) {
        // set values
        this.name = name
        this.cost = cost
        this.text = text
        this.effect = effect
        this.flavorText = flavorText
    }
}
