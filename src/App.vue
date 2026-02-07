<script setup>
  import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar></NavBar>

  <section>
    <form action="">
      <h1>Login Here</h1>
      <label for="email">Email:</label>
      <input type="email" name="email">
      <label for="password">Password</label>
      <input type="password" name="password" id="password">

      <input type="submit" value="Login">
      <a href="">Don't have an account yet?</a>
    </form>
  </section>
</template>

<style scoped></style>
