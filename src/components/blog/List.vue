<template>
    <div>
        <h5>
            <router-link to="/blog/detail">{{ content.title }}</router-link>
        </h5>
        <p>{{ content.date }}</p>
    </div>
</template>

<script>
export default {
    name: "List",
    props: {
        content: Object
    }
}
</script>

<style scoped>

</style>