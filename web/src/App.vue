<script setup lang="ts">
import Sidebar from './components/sidebar/Sidebar.vue';
</script>

<template>
    <Sidebar />
</template>

<style lang="scss">
@import url('./normalize.css');

html,
body {
    width: 100vw;
    height: 100vh;
    background-color: rgb(83, 83, 83);
    color: white;
}

#app {
    width: 100vw;
    height: 100vh;
}

ul,
li {
    margin: 0;
    padding: 0;
}
</style>
