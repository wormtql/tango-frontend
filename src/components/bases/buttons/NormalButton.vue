<template>
    <button @click="$listeners.click">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "NormalButton"
    }
</script>

<style scoped>
    button {
        border: none;
        outline: none;
        background: none;
        color: #555555;
        cursor: pointer;
        font-size: 1em;
        transition: 300ms;
        padding: 8px 16px;
        border-radius: 3px;
    }

    button:hover {
        color: white;
        background: rgba(39, 64, 116, 0.67);
    }
</style>