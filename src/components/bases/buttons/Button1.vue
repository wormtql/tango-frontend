<template>
    <button>
        <span class="span1"></span>
        <span class="span2"></span>
        <span class="span3"></span>
        <span class="span4"></span>
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "Button1",
        props: {
            width: {
                type: Number,
                default: 200
            }
        }
    }
</script>

<style scoped>
    button {
        outline: none;
        border: none;
        /*padding: 16px 0;*/
        width: 300px;
        height: 48px;
        background: transparent;
        cursor: pointer;
        transition: 300ms;
        position: relative;
    }

    button:hover {
        /*background: #eeeeee;*/
    }

    .span1 {
        position: absolute;
        height: 45px;
        width: 3px;
        left: 0;
        top: 0;
        background: #d30068;
        /*border-left: 150px solid #ff00d9aa;*/
        /*border-top: 24px solid transparent;*/
        /*border-bottom: 24px solid transparent;*/
        transform: scaleY(0);
        transition: 300ms;
        transform-origin: top;
    }

    button:hover .span1 {
        transform: scaleY(1);
    }

    .span2 {
        position: absolute;
        height: 3px;
        width: 297px;
        left: 3px;
        top: 0;
        background: #e969a8;
        /*border-top: 24px solid #00ffd8aa;*/
        /*border-left: 150px solid transparent;*/
        /*border-right: 150px solid transparent;*/
        transform: scaleX(0);
        transform-origin: right;
        transition: 300ms;
        /*opacity: 0;*/
    }

    button:hover .span2 {
        transform: scaleY(1);
        opacity: 1;
    }

    .span3 {
        position: absolute;
        height: 45px;
        width: 3px;
        right: 0;
        top: 3px;
        background: #d30068;
        /*border-right: 150px solid #ffe04faa;*/
        /*border-top: 24px solid transparent;*/
        /*border-bottom: 24px solid transparent;*/
        transform: scaleY(0);
        transform-origin: bottom;
        transition: 300ms;
        /*opacity: 0;*/
    }

    button:hover .span3 {
        transform: scaleY(1);
        /*opacity: 1;*/
    }

    .span4 {
        position: absolute;
        height: 3px;
        width: 297px;
        left: 0;
        top: 45px;
        background: #e969a8;
        /*border-bottom: 24px solid #0080ffaa;*/
        /*border-left: 150px solid transparent;*/
        /*border-right: 150px solid transparent;*/
        transform: scaleX(0);
        transform-origin: left;
        transition: 300ms;
        /*opacity: 0;*/
    }

    button:hover .span4 {
        transform: scaleX(1);
        /*transform: none;*/
        /*opacity: 1;*/
    }

</style>