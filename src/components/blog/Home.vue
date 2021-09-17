<template>
    <div class="container mt-4">
        <h5>{{ main_content.title }}</h5>
        <p>{{ main_content.spec }}</p>
    </div>
</template>

<script>
export default {
    name: "Home",
    props: {
        main_content: Object
    }
}
</script>

<style scoped>

</style>