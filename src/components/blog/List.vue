<template>
    <div>
<!--        <h5>-->
<!--            <router-link :to="'/vue_study/blog/detail/' + content.number">{{ content.title }}</router-link>-->
<!--        </h5>-->
        <h5 @click="$router.push('/blog/detail/' + content.number)">{{ content.title }}</h5>
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