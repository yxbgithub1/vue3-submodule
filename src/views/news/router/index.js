export default [{
    path: '/news',
    name: 'news',
    component: () => import('../pages/news'),
    redirect: '/news/list',
    children: [{
        path: '/list',
        name: 'list',
        component: () => import('../pages/list'),
    }]
}]
