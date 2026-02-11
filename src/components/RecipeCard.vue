<script setup>
const props = defineProps({
	id: Number,
	title: String,
	description: String
})
</script>
<template>
	<div>
		<RouterLink :to="'/recipe/' + id" >
			<p>{{ id }}</p>
			<h1>{{ title }}</h1>
			<p>{{ description }} </p>
		</RouterLink>
		<button>Like</button>
	</div>
</template>

<style scoped></style>