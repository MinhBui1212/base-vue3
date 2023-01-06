const Dashboard = () => import('modules/dashboard/views/index.vue')
const routes = [
  {
    path: '/',
    component: Dashboard,
    name: 'Dashboard',
    meta: {
      title: 'Dashboard',
      color: 'text-indigo-410',
      requiresAuth: true,
      parentPath: 'Home'
    },
  },
]
export default routes