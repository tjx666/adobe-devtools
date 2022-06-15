import { createRouter, createWebHashHistory } from 'vue-router';
import LayerPage from './pages/layer/Layer.vue';
import DocumentPage from './pages/document/document.vue';

export enum RoutePath {
    Home = '/',
    Layer = '/layer',
    document = '/document',
}

const routes = [
    { path: RoutePath.Home, component: LayerPage },
    { path: RoutePath.Layer, component: LayerPage },
    { path: RoutePath.document, component: DocumentPage },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

window.j = (path: string) => router.push(path);

export default router;
