<template>
    <div id="app">
        <home-page></home-page>
    </div>
</template>

<script>
    import HomePage from "@/components/pages/HomePage";

    export default {
        name: 'App',
        components: {
            HomePage,
        }
    }
</script>

<style>
    * {
        margin: 0;
        font-family: proxima, Helvetica, Arial, sans-serif;
    }

    #app {
        /*font-family: Avenir, Helvetica, Arial, sans-serif;*/

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        /*color: #2c3e50;*/
        /*margin-top: 60px;*/
    }
</style>
