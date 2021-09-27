<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/blog">Wooki</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/vue_study" class="nav-link">Root</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/vue_study/blog/list" class="nav-link">List</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


    <router-view name="Home" :main_content="main_content"></router-view>
    <router-view name="List" v-for="(content, i) in contents" :key="i" :content="content"></router-view>
    <router-view name="Detail" :content="contents[$route.params.idx]"></router-view>
</template>

<script>
import contents from '@/assets/js/blog/blog';

export default {
    name: "Blog",
    data() {
        return {
            main_content: {
                title: 'Full Stack 개발자의 블로그 입니다.',
                spec: 'made by VUE3 & BOOTSTRAP5'
            },
            contents: contents
        }
    },
    components: {}
}
</script>

<style scoped>

</style>