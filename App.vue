<template>
    <main class="app">Test!!</main>
</template>

<script>
import Card from './built/Card'

export default {
    mounted() {
        console.log(new Card())
    }
}
</script>

<style lang="scss">
.app {
}
</style>
