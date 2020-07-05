<template>
    <div>
        <div class="header">
            <div class="header-center">
                <button class="list" :style="button1Style">
                    <font-awesome-icon icon="book"></font-awesome-icon>
                    单词本
                </button>
                <button class="list">
                    <font-awesome-icon icon="terminal"></font-awesome-icon>
                    控制台
                </button>
            </div>
        </div>

        <div class="body">
            <div v-if="currentPage === 'book'">
                <div class="book-toolbar">
                    <div class="book-toolbar-center">
<!--                        <normal-button2>add</normal-button2>-->
                    </div>

                    <div class="book-toolbar-left">
                        <icon-button2 icon="chevron-left" style="margin-right: 8px"
                                      v-show="currentPage2 === 'word'"
                                      @click="goLeft"
                        ></icon-button2>

                        <div v-show="newBookState && currentPage2 === 'book'">
                            <normal-button2 style="margin-right: 8px" @click="createNewBook">
                                <font-awesome-icon icon="check"></font-awesome-icon>
                                完成
                            </normal-button2>
                            <normal-button2 @click="newBookState = false">
                                <font-awesome-icon icon="times"></font-awesome-icon>
                                取消
                            </normal-button2>
                        </div>
<!--                        <icon-button2 icon="chevron-right"></icon-button2>-->
                    </div>

                    <div class="book-toolbar-right">
                        <normal-button2 @click="add">
                            <font-awesome-icon icon="plus"></font-awesome-icon>
                            添加
                        </normal-button2>
                    </div>
                </div>
                <div class="book-body">
                    <div v-if="currentPage2 === 'book'">
                        <div id="new-book-panel" v-show="newBookState">
                            <input type="text" id="new-book-input1"
                                   placeholder="标题"
                                   v-model="newBookHeader"
                            />
                            <input type="text" id="new-book-input2"
                                   placeholder="描述"
                                   v-model="newBookDescription"
                            />
                            <div style="border-left: 5px solid rgba(39, 64, 116, 0.67); margin-top: 12px">
                                <my-select :options="['公开', '私有']"
                                           style="margin-left: 8px"
                                           v-model="newBookPrivate"
                                ></my-select>
                            </div>

                        </div>

<!--                        <book-item @click="currentPage2 = 'word'"-->
<!--                                   @play="$router.push('/tesuto')"-->
<!--                        ></book-item>-->

                        <book-item v-for="(item, index) in bookData"
                                   :key="'book' + item.id"
                                   :attr="item"
                                   @click="selectBook(index)"
                        ></book-item>

                    </div>
                    <div v-if="currentPage2 === 'word'">
                        <div class="book-header">
                            <h1 style="padding-right: 8px">{{ bookHeader }}</h1>
                            <span>
                                {{ bookData[currentBook].description }}
                            </span>

                            <div style="padding: 24px 0 16px 0;">
                                <span style="padding-right: 8px">
                                    <font-awesome-icon icon="star" style="color: #ffd300"></font-awesome-icon>
                                    10
                                </span>
                                    <span>
                                    <font-awesome-icon icon="code-branch" style="color: #006d8b"></font-awesome-icon>
                                    3
                                </span>
                            </div>

                            <div id="book-button-group">
                                <icon-button2 icon="play" style="margin-right: 8px"></icon-button2>
                                <icon-button2 icon="ellipsis-v" id="more-button"
                                              @click="showBookMenu = true"
                                ></icon-button2>

                            </div>
                            <div id="book-menu" v-show="showBookMenu"
                                 @mouseleave="showBookMenu = false"
                            >
                                <button class="book-menu-item">
                                    <font-awesome-icon icon="unlock" style="padding-right: 16px"></font-awesome-icon>
                                    设为公开
                                </button>
                                <button class="book-menu-item">
                                    <font-awesome-icon icon="lock" style="padding-right: 16px"></font-awesome-icon>
                                    设为私有
                                </button>
                                <button class="book-menu-item">
                                    <font-awesome-icon icon="share-alt" style="padding-right: 16px"></font-awesome-icon>
                                    分享
                                </button>
                                <button class="book-menu-item">
                                    <font-awesome-icon icon="trash-alt" style="padding-right: 16px"></font-awesome-icon>
                                    删除单词本
                                </button>
                            </div>
                        </div>

                        <word-item icon="check" v-show="newWordState"
                                   @click="createNewWord"
                        ></word-item>

                        <word-item v-for="(item, index) in wordData"
                                   :key="'word' + item.id"
                                   :attr="item"
                                   :color="index % 2 === 0 ? '#00000008' : '#27407422'"
                                   @click="deleteWord(index)"
                        ></word-item>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NormalButton2 from "@/components/bases/buttons/NormalButton2";
    import IconButton2 from "@/components/bases/buttons/IconButton2";
    import BookItem from "@/components/pages/my_book/BookItem";
    import WordItem from "@/components/pages/my_book/WordItem";
    import c from "@/constants";
    import MySelect from "@/components/bases/misc/MySelect";
    export default {
        name: "MyBook",
        components: {MySelect, WordItem, BookItem, IconButton2, NormalButton2},
        data: function () {
            return {
                // is error
                isError: false,
                // error message
                errorMessage: "",

                // book or console
                currentPage: "book",
                // when currentPage === book, book or word
                currentPage2: "book",

                showBookMenu: false,

                // is in new book state
                newBookState: false,
                // new book header
                newBookHeader: "",
                // new book des
                newBookDescription: "",
                // new book accessibility,
                newBookPrivate: 0,

                // is in new word state
                newWordState: false,


                // books
                bookData: [],
                currentBook: -1,

                // words
                wordData: [],
            }
        },
        created: function () {
            let token = localStorage.getItem("token");
            if (!token) {
                // this.isError = true;
                // this.errorMessage = "未登录";
                this.$router.replace("/");
                return;
            }

            this.axios.get(c.url + "book/all", {
                params: {
                    token: token
                }
            }).then(res => {
                // window.console.log(res);
                if (res.data.code !== 200) {
                    this.isError = true;
                    this.errorMessage = res.data.message;
                    return;
                }

                this.bookData = res.data.books;
            });
        },
        methods: {
            goLeft: function () {
                if (this.currentPage2 === "word") {
                    this.currentPage2 = "book";
                }
            },
            add: function () {
                if (this.currentPage2 === "book") {
                    this.newBookState = true;
                } else if (this.currentPage2 === "word") {
                    this.newWordState = true;
                }
            },
            createNewBook: function () {
                let token = localStorage.getItem("token");
                if (!token) {
                    // todo error
                    return;
                }

                let data = {
                    name: this.newBookHeader,
                    description: this.newBookDescription,
                    isPublic: this.newBookPrivate === 0 ? 1 : 0,
                    token: token
                };

                // window.console.log(data);

                this.axios.post(c.url + "book/create", data).then(res => {
                    // window.console.log(res);
                    if (res.data.code !== 200) {
                        // todo error
                        return;
                    }

                    this.newBookState = false;
                });
            },
            selectBook: function (index) {
                let token = localStorage.getItem("token");
                if (!token) {
                    // todo error
                    return;
                }

                let data = {
                    token: token,
                    id: this.bookData[index].id,
                };

                this.axios.post(c.url + "word/all", data).then(res => {
                    window.console.log(res);
                    if (res.status !== 200 || res.data.code !== 200) {
                        // todo error
                        return;
                    }

                    this.currentPage2 = "word";
                    this.currentBook = index;
                    this.wordData = res.data.words;
                });
            },
            createNewWord: function (vals) {
                let token = localStorage.getItem("token");
                if (!token) {
                    // todo error
                    return;
                }

                let data = {
                    ...vals,
                    token: token,
                    bookId: this.bookData[this.currentBook].id,
                };

                this.axios.post(c.url + "word/create", data).then(res => {
                    // window.console.log(res);
                    if (res.status !== 200 || res.data.code !== 200) {
                        // todo error
                        return;
                    }

                    let newWord = {
                        s1: res.data.word.s1,
                        s2: res.data.word.s2,
                        attribute: res.data.word.attribute,
                        pronunciation: res.data.word.pronunciation,
                        id: res.data.word.id,
                        bookId: res.data.word.bookId
                    };
                    this.wordData.splice(0, 0, newWord);
                    this.newWordState = false;
                    // window.console.log(this.wordData);
                })
            },
            deleteWord: function (index) {
                let token = localStorage.getItem("token");
                if (!token) {
                    // todo error
                    return;
                }

                let data = {
                    token: token,
                    id: this.wordData[index].id
                };

                this.axios.post(c.url + "word/delete", data).then(res => {
                    window.console.log(res);
                    if (res.status !== 200 || res.data.code !== 200) {
                        // todo error
                        return;
                    }

                    this.wordData.splice(index, 1);
                });
            }
        },
        computed: {
            button1Style: function () {
                return {
                    borderBottom: this.currentPage === "book" ? "5px solid #ffd300" : "unset",
                    // background: this.currentPage === "book" ? "rgba(39, 64, 116, 0.33)" : "white"
                }
            },
            bookHeader: function () {
                let isPublic = this.bookData[this.currentBook].isPublic;
                return `${this.bookData[this.currentBook].name} (${isPublic === 1 ? "public" : "private"})`;
            }
        }
    }
</script>

<style scoped>
    #new-book-input1 {
        display: block;
        outline: none;
        background: none;
        border: none;
        font-size: 24px;
        padding: 0px 8px;
        font-weight: bold;
        /*margin-top: 16px;*/
        border-left: 5px solid rgba(39, 64, 116, 0.67);
    }

    #new-book-input2 {
        display: block;
        outline: none;
        border: none;
        background: none;
        font-size: 16px;
        padding: 0 8px;
        margin-top: 8px;
        border-left: 5px solid rgba(39, 64, 116, 0.67);
    }

    #new-book-panel {
        background: #00000008;
        padding: 8px 0;
    }

    .book-header {
        padding-top: 16px;
        margin-bottom: 16px;
        border-bottom: 1px solid #00000022;
        position: relative;
    }

    #book-button-group {
        position: absolute;
        right: 8px;
        top: 16px;
        /*font-size: 0.9em;*/
    }

    #book-menu {
        box-shadow: 0 0 30px 2px #00000022;
        display: inline-block;
        position: absolute;
        top: 52px;
        right: 0;
        padding: 8px 0;
        background: white;
    }

    .book-menu-item {
        background: white;
        height: 40px;
        width: 200px;
        border: none;
        outline: none;
        cursor: pointer;
        transition: 300ms;
        text-align: left;
        padding-left: 24px;
        display: block;
    }

    .book-menu-item:hover {
        background: #00000011;
    }

    .header {
        position: relative;
        height: 96px;
        border-bottom: 5px solid rgba(39, 64, 116, 0.67);
    }

    .header-center {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    .list {
        outline: none;
        border: none;
        height: 96px;
        padding: 0 16px;
        background: white;
        cursor: pointer;
        box-sizing: content-box;
        vertical-align: top;
        transition: 300ms;
    }

    .list:hover {
        background: rgba(39, 64, 116, 0.11);
    }

    .body {
        height: calc(100vh - 101px);
        overflow: auto;
    }

    .book-toolbar {
        /*padding: 8px 200px;*/
        height: 64px;
        position: relative;
        margin: 0 200px;
        border-bottom: 1px solid #00000022;
    }

    .book-toolbar-center {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        height: 100%;
    }

    .book-toolbar-right {
        position: absolute;
        right: 0px;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .book-toolbar-left {
        position: absolute;
        left: 0px;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .book-body {
        padding: 0 200px;
        /*overflow: auto;*/
        /*height: calc(100vh - 165px);*/
    }
</style>