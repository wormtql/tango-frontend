<template>
    <button @click="$emit('click')">
        <font-awesome-icon :icon="icon"></font-awesome-icon>
    </button>
</template>

<script>
    export default {
        name: "IconButton",
        props: {
            icon: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>
    button {
        border: none;
        outline: none;
        background: none;
        background: rgba(39, 64, 116, 0.11);
        color: rgba(39, 64, 116, 0.67);
        cursor: pointer;
        font-size: 1em;
        transition: 300ms;
        /*padding: 8px 16px;*/
        border-radius: 50%;
        width: 32px;
        height: 32px;
        display: inline-block;
        margin: 0;
    }

    button:hover {
        color: white;
        background: rgba(39, 64, 116, 0.67);
    }
</style>