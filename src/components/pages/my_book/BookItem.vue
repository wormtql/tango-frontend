<template>
    <div class="root">

        <h2 style="padding: 18px 0 0 0; color: rgb(39,64,116)" class="name"
            @click="$emit('click')"
        >{{ attr.name }}</h2>
        <p style="padding: 4px 0 0 0">{{ attr.description }}</p>

        <div style="padding-top: 16px; font-size: 0.8em">
            <font-awesome-icon icon="star" style="color: #ffd300"></font-awesome-icon>
            <span style="padding-left: 4px; padding-right: 16px">{{ attr.star }}</span>
            <font-awesome-icon icon="code-branch" style="color: #006d8b"></font-awesome-icon>
            <span style="padding-left: 4px">{{ attr.fork }}</span>
        </div>

        <div class="buttons">
            <icon-button2 icon="trash-alt" @click="$emit('delete')"></icon-button2>
            <icon-button2 icon="play" @click="$emit('play')"></icon-button2>
        </div>
    </div>
</template>

<script>
    import IconButton2 from "@/components/bases/buttons/IconButton2";
    export default {
        name: "BookItem",
        components: {IconButton2},
        props: {
            attr: {
                type: Object,
                default: function () {
                    return {
                        name: "name",
                        star: 10,
                        fork: 2,
                        isPublic: true,
                        description: "description",
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .root {
        height: 128px;
        border-bottom: 1px solid #00000022;
        position: relative;
    }

    /*.root:hover {*/
    /*    background: rgba(39, 64, 116, 0.11);*/
    /*}*/

    .name {
        cursor: pointer;
    }

    .name:hover {
        /*text-decoration-style: solid;*/
        text-decoration: underline rgba(39, 64, 116, 0.67);
    }

    .buttons {
        position: absolute;
        right: 0;
        height: 100%;
        top: 0;
        display: flex;
        align-items: center;
    }
</style>