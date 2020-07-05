<template>
    <div>
        <div id="progress-bar" :style="progressBarStyle">
        </div>

        <div id="test-body">
            <p id="word-s1">peruse</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TestPage",
        data: function () {
            return {
                currentWordNumber: 4,
                wordsCount: 10
            }
        },
        computed: {
            progressBarStyle: function () {
                return {
                    width: `${100 / this.wordsCount * (this.currentWordNumber + 1)}vw`
                }
            }
        }
    }
</script>

<style scoped>
    #progress-bar {
        height: 5px;
        background: rgba(39, 64, 116, 0.67);
        position: fixed;
    }

    #test-body {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #word-s1 {
        font-size: 3em;
        font-weight: bold;
    }
</style>