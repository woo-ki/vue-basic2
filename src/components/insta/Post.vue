<template>
    <div class="post">
        <div class="post-header">
            <div class="profile"></div>
            <span class="profile-name">{{ post.name }}</span>
        </div>
        <div class="post-body"></div>
        <div class="post-content">
            <p>{{ post.likes }} Likes</p>
            <p><strong>{{ post.name }}</strong> {{ post.content }}</p>
            <p class="date">{{ post.date }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Post",
    props: {
        post: Object
    }
}
</script>

<style scoped src="@/assets/css/insta/post.css">

</style>