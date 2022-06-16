<script setup lang="ts">
import MonacoEditor from '../../components/monacoEditor/MonacoEditor.vue';
</script>

<template>
    <div class="page layer-page">
        <MonacoEditor />
    </div>
</template>

<style lang="scss">
.layer-page {
    .editor {
        width: 100%;
        height: 100%;
    }
}
</style>
