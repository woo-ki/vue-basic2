<template>
    <div id="container">
        <Post v-for="(post, i) in posts" :key="i" :post="post"/>
    </div>
</template>

<script>
import Post from "@/components/insta/Post";

export default {
    name: "Container",
    components: {Post},
    props: {
        posts: Array
    }
}
</script>

<style scoped>

</style>