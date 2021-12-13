import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import LazyImg from './plugins/lazyImg';
import CopyText from './plugins/copyText';

createApp(App)
	.use(router)
	.use(LazyImg)
	.use(CopyText)
	.mount('#app');
