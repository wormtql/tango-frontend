<template>
    <div class="input1-root">
        <div class="input1-icon">
            <font-awesome-icon v-if="icon" :icon="icon"></font-awesome-icon>
        </div>
        <label>
            <input :type="password ? 'password' : 'text'" class="input1" :placeholder="placeholder"
                   :value="value"
                   @input="$emit('input', $event.target.value)"
            />
        </label>

        <span class="triangle" v-if="error"></span>
        <div class="input-error" v-if="error">
            <div style="display: inline-block; width: 32px; padding: 5px 0; vertical-align: top">
                <font-awesome-icon icon="exclamation-circle" style="vertical-align: top"></font-awesome-icon>
            </div>
            <div style="display: inline-block; width: calc(100% - 32px)">
                {{ error }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Input1",
        props: {
            icon: {
                type: String,
                required: true,
            },
            placeholder: {
                type: String,
                default: ""
            },
            password: {
                type: Boolean,
                default: false
            },
            error: {
                type: String
            },
            value: {
                type: String,
                default: ""
            }
        }
    }
</script>

<style scoped>
    .input-error {
        position: absolute;
        left: calc(100% + 10px);
        background: #ff7974;
        /*height: 32px;*/
        width: 150px;
        border-radius: 3px;
        padding: 4px 8px;
        color: white;
        pointer-events: none;
        font-size: 1em;
    }

    .triangle {
        position: absolute;
        right: -10px;
        width: 0;
        height: 0;
        border-right: 5px solid #ff7974;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
    }

    .input1-root {
        position: relative;
        background: #00000011;
        display: flex;
        align-items: center;
        border-radius: 3px;
        transition: 300ms;
    }

    .input1-root:hover {
        background: #00000022;
    }

    .input1 {
        border: none;
        padding: 0 8px;
        height: 40px;
        width: 300px;
        background: transparent;
        outline: none;
        /*box-sizing: border-box;*/
    }

    .input1-icon {
        /*position: absolute;*/
        /*left: 0;*/
        /*top: 0;*/
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        color: white;
        /*border-right: 3px solid gray;*/
        background: rgba(39, 64, 116, 0.67);
        border-radius: 3px;
    }
</style>