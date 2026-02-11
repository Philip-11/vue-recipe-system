<script setup>
import { ref } from 'vue';
import NavBar from './components/NavBar.vue';

const loggedIn = ref(false)

function login() {
  loggedIn.value = !loggedIn.value
}
</script>

<template>
  <header>
    <NavBar></NavBar>
    <div>
      <button>Create Post</button>
    </div>
  </header>

  <router-view />
</template>

<style scoped></style>
