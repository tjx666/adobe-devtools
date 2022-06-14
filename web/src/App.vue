<script setup lang="ts">
import csInterface from './utils/CSInterface';

function helloWorld() {
    csInterface.invoke('helloWorld', null, { timeout: -1 });
}
</script>

<template>
    <button @click="helloWorld">Hello World</button>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
