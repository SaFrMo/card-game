export default class Card {
    name: string
    cost: number
    text: string

    //https://gist.github.com/ericelliott/f3c2a53a1d4100539f71
    constructor({
        name = 'Card Name',
        cost = 0,
        text = 'Text describing card effects.'
    } = {}) {
        // set values
        this.name = name
        this.cost = cost
        this.text = text
    }
}
