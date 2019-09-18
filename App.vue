<template>
    <main class="app">
        <ul :key="deck.lastShuffleTimestamp">
            <li v-for="(card, i) in deck.orderedDrawPileCards" :key="i">
                {{ card }}
            </li>
        </ul>
        <button @click="deck.shuffleDrawPile()">Shuffle</button>
    </main>
</template>

<script>
import Card from './built/Card'
import CardDefaults from './built/CardDefaults'
import Deck from './built/deck'
const { BASIC_ATTACK, BASIC_MOVE, BASIC_DEFEND } = CardDefaults

export default {
    data() {
        return {
            discardPile: [],
            deck: new Deck({
                inventory: [
                    BASIC_ATTACK,
                    BASIC_ATTACK,
                    BASIC_ATTACK,
                    BASIC_DEFEND,
                    BASIC_DEFEND,
                    BASIC_DEFEND
                ]
            })
        }
    }
}
</script>

<style lang="scss">
.app {
}
</style>
