import { createRouter, createMemoryHistory } from 'vue-router';

import LoginVue from '@/views/Login.vue';
import HomeVue from '@/views/Home.vue';

const routes = [
	{ path: '/login', component: LoginVue },
	{ path: '/', component: HomeVue },
]

export const router = createRouter({
	history: createMemoryHistory(),
	routes,
})