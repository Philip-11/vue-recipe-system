<script setup>
import { ref } from 'vue';
import NavBar from './components/NavBar.vue';
import RecipeCardVue from './components/RecipeCard.vue';

const loggedIn = ref(false)
let recipeId = 0

const recipes = ref([
  { id: recipeId++, title: "Purple Yam", description: "A tasty snack!" },
  { id: recipeId++, title: "Purple Jam", description: "A jam made with purple yam!" },
])

function login() {
  loggedIn.value = !loggedIn.value
}
</script>

<template>
  <section v-if="loggedIn">
    <NavBar></NavBar>
    <div>
      <button>Create Post</button>
    </div>
    <RecipeCardVue v-for="recipe in recipes" :key="recipe.id" :title="recipe.title" :description="recipe.description">
    </RecipeCardVue>

  </section>


  <section v-else>
    <form @submit.prevent action="">
      <h1>Login Here</h1>
      <label for="email">Email:</label>
      <input type="email" name="email">
      <label for="password">Password</label>
      <input type="password" name="password" id="password">

      <button @click="login">Submit</button>
      <a href="">Don't have an account yet?</a>
    </form>
  </section>
</template>

<style scoped></style>
