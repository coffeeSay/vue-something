<script setup lang="ts">
import img1 from "@/assets/image/1.jpg";
import img3 from "@/assets/image/3.jpg";
</script>

<template>
	<div class="top"></div>
	<div class="content">
		<img src="" alt="" v-lazy="img1" />
		<img src="" alt="" v-lazy="'/src/assets/image/2.jpg'" />
		<img src="" alt="" v-lazy="img3" />
	</div>
	<div class="buttom"></div>
</template>

<style lang="stylus">
.top,
.buttom
  width 100px
  height 1000px

.content
  img
    display block
    width 300px
</style>
