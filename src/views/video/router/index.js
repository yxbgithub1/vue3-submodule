export default [{
    path: '/video',
    name: 'video',
    component: () => import('../pages/video'),
    redirect: '/video/list',
    children: [{
        path: 'list',
        name: 'list',
        component: () => import('../pages/list'),
    }],
}]