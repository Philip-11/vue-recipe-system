<script setup></script>

<template>
	<form @submit.prevent action="">
		<h1>Login Here</h1>
		<label for="email">Email:</label>
		<input type="email" name="email">
		<label for="password">Password</label>
		<input type="password" name="password" id="password">

		<button @click="login">Submit</button>
		<a href="">Don't have an account yet?</a>
	</form>
</template>