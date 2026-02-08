import { createRouter, createMemoryHistory } from 'vue-router';

import LoginVue from '@/views/Login.vue';

const routes = [
	{ path: '/', component: LoginVue }
]

export const router = createRouter({
	history: createMemoryHistory(),
	routes,
})