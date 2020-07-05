<template>
    <div class="root">
        <span v-for="(item, index) in options" :key="item"
              :class="{'option-item': true, 'active': value === index, 'first': index === 0, 'last': index === options.length - 1}"
              @click="change(index)"
        >
            {{ item }}
        </span>
    </div>
</template>

<script>
    export default {
        name: "MySelect",
        props: {
            options: {
                type: Array,
                required: true
            },
            value: {
                type: Number,
                required: true
            }
        },
        methods: {
            change: function (index) {
                this.$emit("input", index);
            }
        }
    }
</script>

<style scoped>
    .option-item {
        vertical-align: top;
        background: white;
        border-right: 1px solid #00000033;
        font-size: 0.8em;
        padding: 4px 8px;
        box-sizing: border-box;
        text-align: center;
        /*width: 64px;*/
        display: inline-block;
        cursor: pointer;
        transition: 300ms;
    }

    .first {
        border-top-left-radius: 100px;
        border-bottom-left-radius: 100px;
    }

    .last {
        border-top-right-radius: 100px;
        border-bottom-right-radius: 100px;
        border: none;
    }

    .active {
        background: rgba(39, 64, 116, 0.67);
        color: white;
    }

    .root {
        border-radius: 100px;
        box-shadow: 0 0 20px 1px #00000011;
        display: inline-block;
    }
</style>