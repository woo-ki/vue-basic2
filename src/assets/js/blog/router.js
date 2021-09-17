import {createRouter, createWebHistory} from "vue-router";
import Blog from "@/components/blog/Blog";
import List from "@/components/blog/List";
import Index from "@/components/Index"
import Home from "@/components/blog/Home";
import Detail from "@/components/blog/Detail";

const routes = [
    {
        path: '/',
        component: Index
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
                path: 'detail',
                components: {
                    Detail
                }
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;