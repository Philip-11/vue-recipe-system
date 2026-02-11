<script setup>
const props = defineProps({
	title: String,
	description: String
})
</script>
<template>
	<div>
		<a href="">
			<h1>{{ title }}</h1>
			<p>{{ description }} </p>
		</a>
		<button>Like</button>
	</div>
</template>

<style scoped></style>