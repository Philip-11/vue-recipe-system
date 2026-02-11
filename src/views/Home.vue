<script setup>

import { ref } from 'vue';
import RecipeCardVue from '@/components/RecipeCard.vue';

let recipeId = 0

const recipes = ref([
	{ id: recipeId++, title: "Purple Yam", description: "A tasty snack!" },
	{ id: recipeId++, title: "Purple Jam", description: "A jam made with purple yam!" },
])


</script>

<template>
	<RecipeCardVue v-for="recipe in recipes" :key="recipe.id" :id="recipe.id" :title="recipe.title" :description="recipe.description">
	</RecipeCardVue>
</template>