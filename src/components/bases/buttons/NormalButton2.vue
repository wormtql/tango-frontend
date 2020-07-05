<template>
    <button @click="$emit('click')" :style="{width: width}">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "NormalButton2",
        props: {
            width: {
                type: String,
                default: "unset"
            }
        }
    }
</script>

<style scoped>
    button {
        border: none;
        outline: none;
        background: rgba(39, 64, 116, 0.67);
        color: white;
        cursor: pointer;
        /*font-size: 1em;*/
        font-size: 13px;
        transition: 300ms;
        padding: 8px 16px;
        border-radius: 3px;
    }

    button:hover {
        color: white;
        background: rgba(39, 64, 116, 0.33);
    }
</style>