<template>
    <button @click="$emit('click')" :style="buttonStyle">
        <font-awesome-icon :icon="icon"></font-awesome-icon>
    </button>
</template>

<script>
    export default {
        name: "IconButton2",
        props: {
            icon: {
                type: String,
                required: true
            },
            size: {
                type: Number,
                default: 32
            }
        },
        computed: {
            buttonStyle: function () {
                return {
                    width: `${this.size}px`,
                    height: `${this.size}px`,

                }
            }
        }
    }
</script>

<style scoped>
    button {
        border: none;
        outline: none;
        background: none;
        /*background: rgba(39, 64, 116, 0.11);*/
        /*color: rgba(39, 64, 116, 0.67);*/
        color: black;
        cursor: pointer;
        font-size: 1em;
        transition: 300ms;
        /*padding: 8px 16px;*/
        border-radius: 50%;
        /*width: 32px;*/
        /*height: 32px;*/
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin: 0;
    }

    button:hover {
        /*color: white;*/
        background: rgba(39, 64, 116, 0.11);
    }
</style>