<template>
    <div class="header">
        <ul class="header-button-left">
            <li>Cancel</li>
        </ul>
        <ul class="header-button-right">
            <li>Next</li>
        </ul>
        <router-link to="/">
            <img src="@/assets/images/logo.png" class="logo"/>
        </router-link>
    </div>

    <Container :posts="posts"/>

    <div class="footer">
        <ul class="footer-button-plus">
            <input type="file" id="file" class="inputfile"/>
            <label for="file" class="input-plus">+</label>
        </ul>
    </div>
</template>

<script>
import Container from "@/components/insta/Container";
import posts from "@/assets/js/insta/insta";

export default {
    name: "Insta",
    components: {Container},
    data() {
        return {
            posts
        }
    }
}
</script>

<style scoped src="@/assets/css/insta/insta.css">
/*@import '../../assets/css/insta/insta';*/
</style>