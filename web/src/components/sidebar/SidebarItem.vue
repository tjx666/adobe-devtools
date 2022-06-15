<script setup lang="ts">
defineProps({
    name: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['click']);

function handleClick() {
    emit('click');
}
</script>

<template>
    <li :class="['sidebar-item', { 'sidebar-item-active': active }]" @click="handleClick">
        {{ name }}
    </li>
</template>

<style lang="scss">
.sidebar-item {
    display: flex;
    align-items: center;

    height: 40px;
    padding-left: 10px;
    list-style: none;
    color: rgb(165, 165, 165);

    &:hover {
        color: white;
        cursor: pointer;
    }

    &-active {
        color: white;
    }
}
</style>
