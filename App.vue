<template>
    <main class="app">
        <ul :key="deck.lastShuffleTimestamp" class="hand-wrap">
            <li v-for="(card, i) in deck.orderedDrawPileCards" :key="i">
                <single-card :card="card" />
            </li>
        </ul>
        <button @click="deck.shuffleDrawPile()">Shuffle</button>
    </main>
</template>

<script>
// Data
import Card from './built/Card'
import CardDefaults from './built/CardDefaults'
import Deck from './built/deck'
const { BASIC_ATTACK, BASIC_MOVE, BASIC_DEFEND } = CardDefaults

// View
import CardComponent from './components/Card'

export default {
    components: {
        'single-card': CardComponent
    },
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
    font-family: sans-serif;

    .hand-wrap {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-column-gap: 10px;
        grid-auto-flow: column;
        overflow-x: auto;
    }
}
</style>
