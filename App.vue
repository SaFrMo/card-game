<template>
    <main class="app"></main>
</template>

<script>
import Card from './built/Card'
import CardDefaults from './built/CardDefaults'
const { BASIC_ATTACK, BASIC_MOVE, BASIC_DEFEND } = CardDefaults

export default {
    data() {
        return {
            inventory: [BASIC_ATTACK, BASIC_DEFEND],
            discardPile: [],
            drawPile: []
        }
    },
    methods: {
        shuffle() {}
    }
}
</script>

<style lang="scss">
.app {
}
</style>
