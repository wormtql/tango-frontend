<template>
    <div>
        <input class="s1 cell" v-model="value1" :style="style1" :readonly="!edit1"
               @dblclick="edit1 = true"
               @focusout="change1"
        />
        <input class="s1 cell" v-model="value2" :style="style2" :readonly="!edit2"
               @dblclick="edit2 = true"
               @focusout="change2"
        />
        <input class="s1 cell" v-model="value3" :style="style3" :readonly="!edit3"
               @dblclick="edit3 = true"
               @focusout="change3"
        />
        <input class="s1 cell" v-model="value4" :style="style4" :readonly="!edit4"
               @dblclick="edit4 = true"
               @focusout="change4"
        />
        <div class="buttons" :style="{background: color}">
            <icon-button3 :icon="icon" size="0.8em"
                          @click="$emit('click', allValue)"
            ></icon-button3>
        </div>
    </div>
</template>

<script>
    import IconButton3 from "@/components/bases/buttons/IconButton3";
    export default {
        name: "WordItem",
        components: {IconButton3},
        props: {
            attr: {
                type: Object,
                default: function () {
                    return {
                        s1: "peruse",
                        s2: "精读",
                        attribute: "v.",
                        pronunciation: "",
                    }
                }
            },
            color: {
                type: String,
                default: "#00000011"
            },
            icon: {
                type: String,
                default: "trash-alt"
            }
        },
        methods: {
            change1: function () {
                this.edit1 = false;
                this.$emit("change", this.allValue);
            },
            change2: function () {
                this.edit2 = false;
                this.$emit("change", this.allValue);
            },
            change3: function () {
                this.edit3 = false;
                this.$emit("change", this.allValue);
            },
            change4: function () {
                this.edit4 = false;
                this.$emit("change", this.allValue);
            },
        },
        data: function () {
            return {
                edit1: false,
                edit2: false,
                edit3: false,
                edit4: false,

                value1: this.attr.s1,
                value2: this.attr.s2,
                value3: this.attr.attribute,
                value4: this.attr.pronunciation,
            }
        },
        computed: {
            allValue: function () {
                return {
                    s1: this.value1,
                    s2: this.value2,
                    attribute: this.value3,
                    pronunciation: this.value4
                };
            },
            style1: function () {
                return {
                    background: !this.edit1 ? this.color : "rgba(39, 64, 116, 0.22)",
                    // border: !this.edit1 ? 'none' : "1px solid gray"
                }
            },
            style2: function () {
                return {
                    background: !this.edit2 ? this.color : "rgba(39, 64, 116, 0.22)"
                }
            },
            style3: function () {
                return {
                    background: !this.edit3 ? this.color : "rgba(39, 64, 116, 0.22)"
                }
            },
            style4: function () {
                return {
                    background: !this.edit4 ? this.color : "rgba(39, 64, 116, 0.22)"
                }
            }
        }
    }
</script>

<style scoped>
    .cell {
        /*width: 10%;*/
        width: calc((100% - 32px) * 0.25);
        display: inline-block;
        border: none;
        outline: none;
        padding: 0 8px;
        box-sizing: border-box;
        vertical-align: top;
        height: 32px;
    }

    .buttons {
        width: 32px;
        display: inline-block;
    }
</style>