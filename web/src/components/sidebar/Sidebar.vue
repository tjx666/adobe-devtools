<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SidebarItem from './SidebarItem.vue';

const router = useRouter();

const itemNames = ['Layer', 'Document'];
const activeItem = ref('Layer');

function handleSelectItem(item: string) {
    activeItem.value = item;
    router.push(`/${item.toLowerCase()}`);
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
    background-color: rgb(110, 110, 110);
}
</style>
