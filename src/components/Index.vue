<template>
    <ul>
        <li>
            <router-link to="/blog" class="page-move-btn">
                <span>blog</span>
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: "Index"
}
</script>

<style scoped>
.page-move-btn {
    color: black;
    text-decoration: none;
}
li {
    width: fit-content;
    margin: 0 auto;
}
ul {
    margin: 50px 0 0 0;
}
</style>