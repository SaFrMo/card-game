<template>
    <main class="app">
        <ul>
            <li v-for="(card, i) in deck" :key="i">{{ card }}</li>
        </ul>
    </main>
</template>

<script>
import Cards from './built/CardDefaults'
const { BASIC_ATTACK, BASIC_MOVE, BASIC_DEFEND } = Cards

export default {
    data() {
        return {
            deck: [
                BASIC_ATTACK,
                BASIC_ATTACK,
                BASIC_ATTACK,
                BASIC_ATTACK,
                BASIC_DEFEND,
                BASIC_DEFEND
            ]
        }
    }
}
</script>

<style lang="scss">
.app {
}
</style>
