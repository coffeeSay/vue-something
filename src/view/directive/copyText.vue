<script setup lang="ts">
	import { ref }  from 'vue';
	const copyText = ref('我是复制的');

	const copy = () => {
		console.log('复制成功')
	}
</script>

<template>
	<div class="content">
		<div class="show-text">{{ copyText }}</div>
		<div class="btn" v-copy="copyText">点我复制</div>
		<div class="btn" @click="copyText = '我是替换的'">点我替换</div>
		<div v-copy-clip="'我是clipboard插件复制'" @copy="copy" class="btn">点击复制（clipboard）</div>
		<input type="text" placeholder="粘贴到这里">
	</div>
</template>

<style lang="stylus">
.content
	text-align center
	.show-text
		width 150px
		height 50px
		margin 20px auto
		padding 20px
		border 1px solid #cccccc
		border-radius 5px
	.btn
		width 100px
		line-height 30px
		margin 20px auto
		border 1px solid #cccccc
		border-radius 5px
		cursor pointer
	input
		width 300px
		height 30px
		margin-top 30px
		border 1px solid #cccccc
		border-radius 5px

</style>
