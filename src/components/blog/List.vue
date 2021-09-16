<template>
    <div>
        <h5>{{ content.title }}</h5>
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