<script setup lang="ts">
import { ref, onMounted, watch, toRefs } from 'vue';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import './userWorker';

type Editor = ReturnType<typeof monaco.editor.create>;
type SupportedLanguage = 'typescript' | 'javascript' | 'json';

interface EditorProps {
    source: string;
    language: SupportedLanguage;
}
const props = defineProps<EditorProps>();
const { source, language } = toRefs(props);

const editorContainer = ref<HTMLDivElement | null>(null);
let editor: Editor | null = null;

function initEditor() {
    editor = monaco.editor.create(editorContainer.value!, {
        theme: 'vs-dark',
        language: language.value,
        value: source.value,
        readOnly: true,
        lineNumbers: 'on',
        minimap: {
            enabled: false,
        },
    });
}

onMounted(() => {
    initEditor();
});

watch(source, (newSource, oldSource) => {
    if (newSource !== oldSource) {
        editor?.setValue(newSource);
    }
});

watch(language, (newLanguage: SupportedLanguage) => {
    monaco.editor.setModelLanguage(editor!.getModel()!, newLanguage);
});

defineExpose({
    editorContainer,
});
</script>

<template>
    <div class="editor" ref="editorContainer"></div>
</template>

<style lang="scss"></style>
