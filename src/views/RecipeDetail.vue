<script setup>
import { ref } from 'vue';

const props = defineProps({
  id: String,
});

let recipeId = 0;
const recipes = ref([
  { id: recipeId++, title: "Purple Yam", description: "A tasty snack!" },
  {
    id: recipeId++,
    title: "Purple Jam",
    description: "A jam made with purple yam!",
  },
]);

const findRecipe = recipes.value.find((recipe) => recipe.id === Number(props.id));
</script>
<template>
  <div>Recipe {{ id }}</div>
  <h1>{{ findRecipe.title }}</h1>
  <p>{{ findRecipe.description }}</p>
</template>
