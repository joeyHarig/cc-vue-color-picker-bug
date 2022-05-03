import { createApp } from 'vue';
import {
  applyPolyfills as applyPolyfillsC,
  defineCustomElements as defineCustomElementsC,
} from '@esri/calcite-components/dist/loader';
import App from './App.vue';

// Using stencil in Vue: https://stenciljs.com/docs/vue
applyPolyfillsC().then(() => {
  defineCustomElementsC(window, {
    resourcesUrl: process.env.VUE_APP_RESOURCES_URL,
  });
});

createApp(App).mount('#app');
