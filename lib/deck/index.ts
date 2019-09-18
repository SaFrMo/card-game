import Card from '../Card'
import { shuffle } from '../utils'

export default class Deck {
    // All the cards that the player actually owns
    inventory: Array<Card>
    // Cards that are removed at the end of the battle
    temporaries: Array<Card>

    // indices
    drawPileIndices: Array<number>
    handIndices: Array<number>
    discardPileIndices: Array<number>

    // meta
    lastShuffleTimestamp: number

    constructor({ inventory = [], temporaries = [], shuffle = true } = {}) {
        this.inventory = inventory
        this.temporaries = temporaries

        if (shuffle) {
            this.shuffleDrawPile()
        }
    }

    //
    // === Basic deck functions ===
    //
    shuffleDrawPile() {
        // reset draw pile to match count
        this.drawPileIndices = []
        for (let i = 0; i < this.fullDeck.length; i++) {
            this.drawPileIndices.push(i)
        }
        this.drawPileIndices = shuffle(this.drawPileIndices)
        this.lastShuffleTimestamp = Date.now()
    }
    // draw(count: number = 1) {}

    //
    // === Misc accessors ===
    //
    get fullDeck(): Array<Card> {
        return this.inventory.concat(this.temporaries)
    }
    get orderedDrawPileCards(): Array<Card> {
        const output: Array<any> = []
        for (let i of this.drawPileIndices) {
            output.push(this.fullDeck[i])
        }
        return output
    }
}
