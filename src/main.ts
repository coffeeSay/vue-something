import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import LazyImg from './plugins/lazyImg';

createApp(App)
	.use(router)
	.use(LazyImg)
	.mount('#app');
