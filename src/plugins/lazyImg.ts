import { App } from 'vue';
import { IMAGE_DEFAULT } from '../config/env';

const install = (app: App) => {
	app.directive('lazy', ({
		// created() {},
		beforeMount(el, binding) {
			if (!el.getAttribute('src')) {
				el.setAttribute('src', IMAGE_DEFAULT);
			}

			const imgSrc: string = binding.value;
			if (!imgSrc) {
				return;
			}

			const io = new IntersectionObserver((entries: any[]) => {
				for (const listener of entries) {
					// console.log(listener);
					if (listener.isIntersecting && listener.target.currentSrc !== imgSrc) {
						el.setAttribute('src', imgSrc);
						// 停止观察
						// io.unobserve(el);
						// 关闭观察器
						io.disconnect();
					}
				}
			});
			// 绑定观察器
			io.observe(el);
		},
		// mounted(el, binding, vnode, oldVnode) {},
	}))
}

export default {
	install
}
