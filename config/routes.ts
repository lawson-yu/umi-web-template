export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    wrappers: ['@/wrappers'],
    component: '@/pages/home',
  },
  {
    path: '/search',
    component: '@/pages/search',
  },
  {
    path: '/*',
    component: '@/pages/404',
  },
];
