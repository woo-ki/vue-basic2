<template>
    <router-view></router-view>
</template>

<script>
export default {
    name: 'App',
    components: {}
}
</script>

<style>
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    box-sizing: border-box;
    font-family: "consolas";
    width: 100%;
    max-width: 460px;
    margin: auto;
    position: relative;
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
}

body {
    margin: 0;
}
</style>
