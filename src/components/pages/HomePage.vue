<template>
    <div>
        <div class="header">
            <div class="header-left">
                単語
            </div>
            <div class="header-center">
                <button class="list" @click="gotoHomePage">
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
                    <img class="avatar" src="@/assets/tom.jpeg"
                         @mouseenter="showMenu = true"
                    />
                    <div class="menu" @mouseleave="showMenu = false" v-show="showMenu">
                        <p style="text-align: center; padding: 16px 0; margin-bottom: 8px; border-bottom: 1px solid #00000011">
                            {{ signedUsername }}
                        </p>
                        <button class="menu-item">
                            <font-awesome-icon icon="cog"></font-awesome-icon>
                            <span style="padding-left: 16px">个人中心</span>
                        </button>
                        <button class="menu-item">
                            <font-awesome-icon icon="star"></font-awesome-icon>
                            <span style="padding-left: 16px">我的star</span>
                        </button>
                        <button class="menu-item" @click="$router.push('/my-book')">
                            <font-awesome-icon icon="book"></font-awesome-icon>
                            <span style="padding-left: 16px">我的单词本</span>
                        </button>
                    </div>
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
                <p style="margin: 32px 0 16px 0; padding-left: 16px; border-left: 5px solid black">FUNCTION1</p>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam atque dignissimos
                    distinctio enim esse et, expedita id, impedit itaque laudantium maxime nesciunt nihil, nulla officia
                    pariatur provident sequi.
                </div>

                <p style="margin: 32px 0 16px 0; padding-left: 16px; border-left: 5px solid black">FUNCTION1</p>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dignissimos, dolorem enim esse facere
                    iure laborum magni nemo numquam provident soluta tempora totam ut velit vero? Facere illo quis
                    voluptate!
                </div>
                <div>Adipisci, doloribus excepturi exercitationem inventore laudantium maxime minus nemo nulla numquam
                    odit pariatur quae quas quibusdam repudiandae rerum sunt veniam. Aliquid architecto cumque ducimus
                    iusto nobis quidem soluta voluptas voluptatibus?
                </div>
                <div>Ab adipisci architecto, asperiores cumque dignissimos distinctio ex illum labore, laborum libero
                    nisi non numquam obcaecati odio porro praesentium quae quaerat quas quibusdam quos, rerum saepe
                    vitae! Amet sequi, voluptas!
                </div>
<!--                <img src="@/assets/svgs/undraw_empty_xct9.svg" style="height: 300px; margin-top: 64px" />-->
            </div>
            <div v-else-if="currentPage === 'login'" class="login-panel">
                <div class="worm">
                    <img src="@/assets/svgs/undraw_Login_v483.svg" class="avatar2" />

                    <icon-button icon="user-plus" class="worm-button" @click="gotoSignUpPage"></icon-button>
                </div>

                <input1 icon="user" class="field" placeholder="用户名"
                        :error="usernameError1"
                        v-model="username1"
                ></input1>
                <input1 icon="key" class="field" placeholder="密码" password
                        v-model="password1"
                ></input1>

                <p class="error-info" v-if="loginError">
                    <font-awesome-icon icon="exclamation-triangle"></font-awesome-icon>
                    {{ loginError }}
                </p>

                <normal-button2 width="356px" id="login-button" @click="doLogin">
                    <font-awesome-icon icon="sign-in-alt"></font-awesome-icon>
                    登录
                </normal-button2>
            </div>
            <div v-else-if="currentPage === 'sign_up'" class="sign-up-panel">
                <div class="worm">
                    <img src="@/assets/svgs/undraw_Login_v483.svg" class="avatar2" />

                    <icon-button icon="sign-in-alt" class="worm-button" @click="gotoLoginPage"></icon-button>
                </div>

                <input1 icon="user" class="field" placeholder="用户名"
                        :error="usernameError2"
                        v-model="username2"
                ></input1>
                <input1 icon="key" class="field" placeholder="密码" password
                        v-model="password2"
                        @input="checkConfirmPassword"
                ></input1>
                <input1 icon="key" class="field" placeholder="确认密码" password
                        :error="confirmPasswordError"
                        @input="checkConfirmPassword"
                        v-model="confirmPassword"
                ></input1>

                <p class="error-info" v-if="signUpError">
                    <font-awesome-icon icon="exclamation-triangle"></font-awesome-icon>
                    {{ signUpError }}
                </p>

                <normal-button2 width="356px" id="sign-up-button" @click="doSignUp">
                    <font-awesome-icon icon="user-plus"></font-awesome-icon>
                    注册
                </normal-button2>
            </div>
        </div>
    </div>
</template>

<script>
    // import Button1 from "@/components/bases/buttons/Button1";
    import NormalButton from "@/components/bases/buttons/NormalButton";
    import Input1 from "@/components/bases/inputs/Input1";
    import NormalButton2 from "@/components/bases/buttons/NormalButton2";
    import IconButton from "@/components/bases/buttons/IconButton";
    import c from "@/constants";
    export default {
        name: "HomePage",
        components: {IconButton, NormalButton2, Input1, NormalButton},
        data: function () {
            return {
                isLoggedIn: false,
                currentPage: "home",
                showMenu: false,
                signedUsername: "",

                usernameError1: "",
                usernameError2: "",
                passwordError1: "",
                confirmPasswordError: "",

                username1: "",
                password1: "",
                username2: "",
                password2: "",
                confirmPassword: "",

                signUpError: "",
                loginError: ""
            }
        },
        methods: {
            gotoLoginPage: function () {
                // window.console.log("aaa");
                this.currentPage = "login";
            },
            gotoSignUpPage: function () {
                this.currentPage = "sign_up";
            },
            gotoHomePage: function () {
                this.currentPage = "home";
            },

            checkConfirmPassword: function () {
                if (this.password2 !== this.confirmPassword) {

                    this.confirmPasswordError = "密码与确认密码不一致";
                } else {
                    this.confirmPasswordError = "";
                }
            },

            doSignUp: function () {
                if (this.username2 === "") {
                    this.usernameError2 = "用户名不能为空";
                    return;
                }

                let data = {
                    username: this.username2,
                    password: this.password2,
                };
                this.axios.post(c.url + "user/sign_up", data).then(res => {
                    // window.console.log(res);
                    if (res.data.code !== 200) {
                        this.signUpError = res.data.message;
                        return Promise.reject(res.data.message);
                    } else {
                        return this.axios.post(c.url + "user/login", data);
                    }
                }).then(res => {
                    // window.console.log(res);
                    if (res.data.code !== 200) {
                        this.signUpError = res.data.message;
                        return Promise.reject(res.data.message);
                    } else {
                        let token = res.data.token;
                        // window.console.log(token);
                        localStorage.setItem("token", token);

                        this.isLoggedIn = true;
                        this.currentPage = "home";
                        this.signedUsername = data.username;
                    }
                }).catch(() => {});
            },
            doLogin: function () {
                if (this.username1 === "") {
                    this.usernameError1 = "用户名不能为空";
                    return;
                }

                let data = {
                    username: this.username1,
                    password: this.password1,
                };
                this.axios.post(c.url + "user/login", data).then(res => {
                    if (res.data.code !== 200) {
                        this.loginError = res.data.message;
                        return Promise.reject(res.data.message);
                    } else {
                        let token = res.data.token;
                        localStorage.setItem("token", token);

                        this.isLoggedIn = true;
                        this.currentPage = "home";
                        this.signedUsername = data.username;
                    }
                }).catch(() => {});
            }
        }
    }
</script>

<style scoped>
    .error-info {
        /*background: rgba(255, 35, 0, 0.5);*/
        width: 100%;
        padding: 8px;
        box-sizing: border-box;
        border-radius: 3px;
        color: rgba(255, 35, 0, 0.5);
    }

    .menu {
        position: absolute;
        background: white;
        box-shadow: 0 0 20px 1px #00000022;
        /*border: 1px solid #000000aa;*/
        border-radius: 3px;
        left: 50%;
        transform: translateX(-50%) translateY(-30px);
        z-index: 1;
        padding-top: 32px;
        padding-bottom: 8px;
    }

    .menu-item {
        outline: none;
        border: none;
        background: white;
        width: 240px;
        height: 40px;
        /*margin: 0 16px;*/
        /*border-bottom: 1px solid #00000022;*/
        cursor: pointer;
        transition: 300ms;
        text-align: left;
        padding-left: 24px;
    }

    .menu-item:hover {
        background: #00000011;
    }

    .login-panel, .sign-up-panel {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 32px;
    }

    .login-panel > .worm,
    .sign-up-panel > .worm
    {
        position: relative;
        height: 150px;
        width: 100%;
        margin-bottom: 40px;
    }

    .login-panel > .worm > .worm-button,
    .sign-up-panel > .worm > .worm-button
    {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }

    .login-panel img,
    .sign-up-panel img {
        /*margin-bottom: 48px;*/
        height: 150px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    .login-panel #login-button,
    .sign-up-panel #sign-up-button {
        /*margin-top: 90px;*/
        position: absolute;
        bottom: 32px;
    }

    .field {
        margin-bottom: 32px;
    }

    .header {
        height: 96px;
        border-bottom: 5px solid rgba(39, 64, 116, 0.67);
        padding: 0px 200px 0 200px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
    }

    .avatar2 {
        width: 100px;
        /*height: 64px;*/
        /*border-radius: 50%;*/
        /*box-shadow: 0 0 20px 1px #00000022;*/
    }

    .body {
        margin: 0 200px;
        /*padding: 48px 0;*/
        height: calc(100vh - 101px);
        display: flex;
        justify-content: center;
        position: relative;
    }

    .header-left {
        position: absolute;
        left: 200px;
    }

    .header-center {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    .header-right {
        position: absolute;
        right: 200px;
    }

    .avatar {
        border-radius: 50%;
        height: 48px;
        width: 48px;
        box-shadow: 0 0 20px 2px #00000055;
        position: relative;
        z-index: 100;
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