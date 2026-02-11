import { createRouter, createWebHistory } from 'vue-router';

import LoginVue from '@/views/Login.vue';
import HomeVue from '@/views/Home.vue';
import RecipeDetail from '@/views/RecipeDetail.vue';

const routes = [
	{ path: '/login', component: LoginVue },
	{ path: '/', component: HomeVue },
	{ path: '/recipe/:id', component: RecipeDetail, props: true}
]

export const router = createRouter({
	history: createWebHistory(),
	routes,
})