<script setup lang="ts">
import Sidebar from './components/sidebar/Sidebar.vue';
</script>

<template>
    <Sidebar />
    <router-view v-slot="{ Component }">
        <keep-alive> <component :is="Component" /> </keep-alive>
    </router-view>
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
    display: flex;

    width: 100vw;
    height: 100vh;

    > .page {
        flex: 1;
    }
}

ul,
li {
    margin: 0;
    padding: 0;
}
</style>
