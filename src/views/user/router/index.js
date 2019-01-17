export default [{
    path: '/user',
    name: 'user',
    component: () => import('../pages/user'),
    redirect: '/user/login',
    children: [{
        path: 'login',
        name: 'login',
        component: () => import('../pages/login'),
    }, {
        path: 'register',
        name: 'register',
        component: () => import('../pages/register'),
    }],
}]