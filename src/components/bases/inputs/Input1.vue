<template>
    <div class="input1-root">
        <div class="input1-icon">
            <font-awesome-icon v-if="icon" :icon="icon"></font-awesome-icon>
        </div>
        <label>
            <input type="text" class="input1" />
        </label>

    </div>
</template>

<script>
    export default {
        name: "Input1",
        props: {
            icon: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>
    .input1-root {
        /*position: relative;*/
        background: #00000022;
        display: flex;
        align-items: center;
    }

    .input1 {
        border: none;
        padding: 0 8px;
        height: 48px;
        background: transparent;
        outline: none;
    }

    .input1-icon {
        /*position: absolute;*/
        /*left: 0;*/
        /*top: 0;*/
        width: 48px;
    }
</style>