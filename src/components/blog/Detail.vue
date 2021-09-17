<template>
    <div class="post_detail">
        <h4>상세페이지</h4>
        <h5>{{ content.title }}</h5>
        <p>{{ content.content }}</p>
    </div>
</template>

<script>
export default {
    name: "Detail",
    props: {
        content: Object
    }
}
</script>

<style scoped>
.post_detail {
    margin-top: 50px;
}
</style>