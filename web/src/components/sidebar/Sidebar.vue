<script setup lang="ts">
import { ref } from 'vue';
import SidebarItem from './SidebarItem.vue';

const itemNames = ['Layer', 'Document'];
const activeItem = ref('Layer');

function handleSelectItem(item: string) {
    activeItem.value = item;
}
</script>

<template>
    <ul class="sidebar">
        <SidebarItem
            v-for="item of itemNames"
            :name="item"
            :active="item === activeItem"
            @click="handleSelectItem(item)"
        />
    </ul>
</template>

<style lang="scss">
.sidebar {
    width: 100px;
    height: 100vh;
    position: fixed;
    left: 0;
    background-color: rgb(110, 110, 110);
}
</style>
