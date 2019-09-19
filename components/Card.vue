<template>
    <div class="card">
        <h3 class="name">{{ card.name }}</h3>
        <span class="cost">{{ card.cost }}</span>
        <img class="image" src="//placehold.it/300x180" />
        <div class="text">
            {{ card.text }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        card: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style lang="scss">
.card {
    --background: #eee;
    --text-background: #fff;

    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto 1fr;
    grid-row-gap: 10px;
    width: 250px;
    height: 350px;
    border: 2px solid black;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
    background: var(--background);

    .name {
        margin: 0;
    }
    .image {
        grid-column: span 2;
        width: 100%;
    }
    .text {
        border: 1px solid black;
        padding: 8px 5px;
        background: var(--text-background);
        grid-column: span 2;
    }
}
</style>
