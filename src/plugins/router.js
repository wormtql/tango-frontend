import HomePage from "@/components/pages/HomePage";
import VueRouter from "vue-router";
import MyBook from "@/components/pages/my_book/MyBook";
import TestPage from "@/components/pages/TestPage";

const routes = [
    {
        path: "/",
        component: HomePage
    },
    {
        path: "/my-book",
        component: MyBook
    },
    {
        path: "/tesuto",
        component: TestPage
    }
];

const router = new VueRouter({
    routes
});

export default router;