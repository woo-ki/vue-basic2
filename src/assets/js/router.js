import {createRouter, createWebHashHistory} from "vue-router";
import Blog from "@/components/blog/Blog";
import List from "@/components/blog/List";
import Index from "@/components/Index"
import Home from "@/components/blog/Home";
import Detail from "@/components/blog/Detail";
import Author from "@/components/blog/Author";
import Comment from "@/components/blog/Comment";
import Insta from "@/components/insta/Insta";

const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/insta',
        component: Insta
    },
    {
        path: "/blog",
        component: Blog,
        children: [
            {
                path: 'list',
                components: {
                    List
                }
            },
            {
                path: '',
                components: {
                    Home
                }
            },
            {
                path: 'detail/:idx',
                components: {
                    Detail
                },
                children: [
                    {
                        path: 'author',
                        component: Author
                    },
                    {
                        path: 'comment',
                        component: Comment
                    }
                ]
            }
        ]
    },
];

const router = createRouter({
    history: createWebHashHistory('/vue-study/'),
    routes,
});

export default router;