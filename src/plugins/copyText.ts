import { App, DirectiveBinding } from 'vue';
import ClipboardJS from 'clipboard';

const install = (app: App) => {
	let copyEl: HTMLTextAreaElement | HTMLInputElement | any = null;
	const copyFn = (el: HTMLTextAreaElement | HTMLInputElement, value: any) => {
		el.value = value;
		el.select();
		el.setSelectionRange(0, `${value}`.length);
		try {
			document.execCommand('copy');
			console.log('复制成功');
		} catch (err) {
			throw new Error('浏览器不支持');
		}
	}
	// 自定义
	app.directive('copy', ({
		// created() {},
		beforeMount(el: HTMLElement, binding: DirectiveBinding) {
			el.addEventListener('click', () => {
				console.log(10)
				const { value = '' } = binding;
				copyEl = document.querySelector('#copyEl');
				if (!copyEl) {
					copyEl = document.createElement('textarea');
					document.body.appendChild(copyEl);
				}

				copyEl.setAttribute('readonly', 'readonly');
				copyEl.setAttribute('style', 'position: absolute; top: -1000px; left: -1000px; z-index: 0; padding: 0; margin: 0; border: 0; outline: 0; color: transparent; resize: none; opacity: 0;');
				copyEl.setAttribute('id', 'copyEl');
				copyFn(copyEl, value);
			}, false);
		},
		updated(el: HTMLElement, binding: DirectiveBinding) {
			const { value } = binding;
			copyFn(copyEl, value);
		}
		// update(el: HTMLElement, binding: DirectiveBinding) {
		// 	// el.setAttribute('data-clipboard-text', binding.value);
		// },
		// mounted(el, binding, vnode, oldVnode) {},
	}));

	// clipboard 插件
	app.directive('copy-clip', ({
		// created() {},
		beforeMount(el: HTMLElement, binding: DirectiveBinding) {
			el.setAttribute('data-clipboard-text', binding.value);
        const clipboard = new ClipboardJS(el);
        clipboard.on('success', (e: ClipboardJS) => {
            const evt = document.createEvent('HTMLEvents');
            evt.initEvent('copy', true, true);
            el.dispatchEvent(evt);
            e.clearSelection();
        });

        clipboard.on('error', (e: ClipboardJS) => {
					e.destroy();
					throw new Error('复制失败');
        });
		},
		updated(el: HTMLElement, binding: DirectiveBinding) {
			el.setAttribute('data-clipboard-text', binding.value);
		}
	}))
}

export default {
	install
}
