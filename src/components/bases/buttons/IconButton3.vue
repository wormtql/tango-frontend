<template>
    <button @click="$emit('click')" :style="buttonStyle">
        <font-awesome-icon :icon="icon"></font-awesome-icon>
    </button>
</template>

<script>
    export default {
        name: "IconButton3",
        props: {
            icon: {
                type: String,
                required: true
            },
            size: {
                type: String,
                default: "1em"
            }
        },
        computed: {
            buttonStyle: function () {
                return {
                    fontSize: this.size
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
        color: rgba(39, 64, 116, 0.67);
        cursor: pointer;
        /*font-size: 1em;*/
        transition: 300ms;
        /*padding: 8px 16px;*/
        /*border-radius: 50%;*/
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
    }

    button:hover {
        color: rgba(39, 64, 116, 0.33);
        /*background: rgba(39, 64, 116, 0.11);*/
    }
</style>