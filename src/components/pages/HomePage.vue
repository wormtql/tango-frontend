<template>
    <div>
        <div class="header">
            <div class="header-left">
                単語
            </div>
            <div class="header-center">
                <button class="list">
                    <font-awesome-icon icon="home"></font-awesome-icon>
                    Home
                </button>
                <button class="list">
                    <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
                    Github
                </button>
                <button class="list">
                    <font-awesome-icon icon="question-circle"></font-awesome-icon>
                    About
                </button>
            </div>
            <div class="header-right">
<!--                <font-awesome-icon icon="user"></font-awesome-icon>-->
                <div v-if="isLoggedIn">
                    <img class="avatar" src="@/assets/logo.png" />
                </div>
                <div v-else>
                    <normal-button @click="gotoLoginPage">
                        <font-awesome-icon icon="sign-in-alt"></font-awesome-icon>
                        登录/注册
                    </normal-button>
                </div>

            </div>
        </div>
        <div class="body">
            <div v-if="currentPage === 'home'">
                <img src="@/assets/svgs/undraw_empty_xct9.svg" style="height: 300px" />
            </div>
            <div v-else-if="currentPage === 'login'">
                <img src="@/assets/logo.png" class="avatar2">
                <input1 icon="user"></input1>
            </div>
        </div>
    </div>
</template>

<script>
    // import Button1 from "@/components/bases/buttons/Button1";
    import NormalButton from "@/components/bases/buttons/NormalButton";
    import Input1 from "@/components/bases/inputs/Input1";
    export default {
        name: "HomePage",
        components: {Input1, NormalButton},
        data: function () {
            return {
                isLoggedIn: false,
                currentPage: "home"
            }
        },
        methods: {
            gotoLoginPage: function () {
                window.console.log("aaa");
                this.currentPage = "login";
            }
        }
    }
</script>

<style scoped>
    .header {
        height: 96px;
        border-bottom: 5px solid rgba(39, 64, 116, 0.67);
        margin: 0px 200px 0 200px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
    }

    .avatar2 {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        box-shadow: 0 0 20px 1px #00000022;
    }

    .body {
        margin: 0 200px;
        padding: 48px 0;
        display: flex;
        justify-content: center;
    }

    .header-left {
        position: absolute;
        left: 0;
    }

    .header-center {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    .header-right {
        position: absolute;
        right: 0;
    }

    .avatar {
        border-radius: 50%;
        height: 48px;
        width: 48px;
        box-shadow: 0 0 20px 2px #00000055;
    }

    .list {
        outline: none;
        border: none;
        height: 96px;
        padding: 0 16px;
        font-size: 1em;
        background: none;
        cursor: pointer;
        transition: 300ms;
    }

    .list:hover {
        background: rgba(39, 64, 116, 0.11);
    }
</style>