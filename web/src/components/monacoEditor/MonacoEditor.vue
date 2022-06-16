<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import './userWorker';

const editorContainer = ref<HTMLDivElement | null>(null);

onMounted(() => {
    monaco.editor.create(editorContainer.value!, {
        value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
        language: 'typescript',
    });
});

defineExpose({
    editorContainer,
});
</script>

<template>
    <div class="editor" ref="editorContainer"></div>
</template>

<style lang="scss"></style>
