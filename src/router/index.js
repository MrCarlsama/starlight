import {createRouter, createWebHistory} from 'vue-router';

import {defineAsyncComponent} from 'vue';

export const router = createRouter({
  linkExactActiveClass: 'active',
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: defineAsyncComponent(() =>
        import('../components/StageGirls.vue')
      ),
    },
    {
      path: '/memoris',
      name: 'memoris',
      component: defineAsyncComponent(() =>
        import('../components/Memoris.vue')
      ),
    },
    {
      path: '/team',
      name: 'team',
      component: defineAsyncComponent(() =>
        import('../components/TeamView.vue')
      ),
    },
  ],
});
