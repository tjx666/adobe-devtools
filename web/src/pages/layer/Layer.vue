<script setup lang="ts">
import { ref, onBeforeMount, onUnmounted } from 'vue';
import MonacoEditor from '../../components/monacoEditor/MonacoEditor.vue';
import csInterface from '../../utils/CSInterface';
import psDomEvent from '../../utils/psDomEvent';

const layerDescInfo = ref('');

async function updateLayerDescInfo() {
    layerDescInfo.value = await csInterface.invoke<string>('layer.getActiveLayerDescriptorInfo');
}

onBeforeMount(async () => {
    updateLayerDescInfo();
    psDomEvent.onEvent('select', updateLayerDescInfo);
});

onUnmounted(() => {
    psDomEvent.stopListeningEvent('select', updateLayerDescInfo);
});
</script>

<template>
    <div class="page layer-page">
        <MonacoEditor language="json" :source="layerDescInfo" />
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
