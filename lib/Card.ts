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
    onBeforePlay: Array<Function>
    onPlay: Array<Function>
    onAfterPlay: Array<Function>

    //https://gist.github.com/ericelliott/f3c2a53a1d4100539f71
    constructor({
        name = 'Card Name',
        cost = 0,
        text = '',
        flavorText = '',
        effect = {
            type: 'attack',
            amount: 1
        },
        onBeforePlay = [],
        onPlay = [],
        onAfterPlay = []
    } = {}) {
        // set values
        this.name = name
        this.cost = cost
        this.text = text
        this.effect = effect
        this.flavorText = flavorText

        this.onBeforePlay = onBeforePlay
        this.onPlay = onPlay
        this.onAfterPlay = onAfterPlay
    }

    async play(
        args: any,
        { skipBefore = false, skip = false, skipAfter = false } = {}
    ) {
        if (!skipBefore) {
            for (let cb of this.onBeforePlay.filter(Boolean)) {
                await cb(this, args)
            }
        }

        if (!skip) {
            for (let cb of this.onPlay.filter(Boolean)) {
                await cb(this, args)
            }
        }

        if (!skipAfter) {
            for (let cb of this.onAfterPlay.filter(Boolean)) {
                await cb(this, args)
            }
        }
    }
}
