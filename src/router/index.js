import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue';
// import AboutView from '../views/AboutView.vue';
// import UserProfile from '../views/UserProfile.vue';
// import NotFound from '../views/NotFound.vue';
import Dashboard from '../views/Dashboard.vue';

const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView,
//   },
//   {
//     path: '/about',
//     name: 'about',
//     component: () => import('../views/AboutView.vue'),
//   },

{
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue'),
  },


//   {
//     path: '/user/:id', // Dynamic segment
//     name: 'user-profile',
//     component: UserProfile,
//     props: true, // Pass route params as component props
//   },
  // Catch-all route for 404 Not Found
//   {
//     path: '/:catchAll(.*)', // Vue Router 4 syntax for catch-all
//     name: 'NotFound',
//     component: NotFound,
//   },
];

const router = createRouter({
  history: createWebHistory(), // Use HTML5 History API for clean URLs (e.g., /about)
  routes,
});

export default router;