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

    constructor({ inventory = [], temporaries = [] } = {}) {
        this.inventory = inventory
        this.temporaries = temporaries
    }

    //
    // === Basic deck function ===
    //
    shuffleDrawPile() {
        // reset draw pile to match count
        this.drawPileIndices = []
        // TODO: start here
        for (let i = 0; i < this.fullDeck.length; i++) {}
    }
    draw(count: number = 1) {}

    //
    // === Misc accessors ===
    //
    get fullDeck(): Array<Card> {
        return this.inventory.concat(this.temporaries)
    }
}
