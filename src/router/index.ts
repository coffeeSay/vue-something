import { createRouter, createWebHashHistory } from 'vue-router';
const Home = () => import(/* webpackChunkName: 'Home' */ '@/view/home.vue');
const lazyImg = () => import(/* webpackChunkName: 'Directive' */ '@/view/directive/lazyImg.vue');

const Router = createRouter({
	history: createWebHashHistory(),
	routes: [{
		path: '/',
		name: 'home',
		component: Home
	}, {
		path: '/lazyImg',
		name: 'lazyImg',
		component: lazyImg
	}]
});

export default Router;
