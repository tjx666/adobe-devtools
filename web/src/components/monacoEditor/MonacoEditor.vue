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
const editor = ref<Editor | null>(null);

onMounted(() => {
    editor.value = monaco.editor.create(editorContainer.value!, {
        value: source.value,
        language: language.value,
        theme: 'vs-dark',
        minimap: {
            enabled: false,
        },
    });
});

watch(source, (newSource, oldSource) => {
    if (newSource !== oldSource) {
        // debugger;
        // editor.value?.setValue(newSource);
    }
});

// watch(language, (newLanguage: SupportedLanguage) => {
//     monaco.editor.setModelLanguage(editor.value!.getModel()!, newLanguage);
// });

defineExpose({
    editorContainer,
});
</script>

<template>
    <div class="editor" ref="editorContainer"></div>
</template>

<style lang="scss"></style>
