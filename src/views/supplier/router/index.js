export default [{
    path: '/supplier',
    name: 'supplier',
    redirect: '/supplier/list',
    component: () => import('../pages/supplier'),
    children: [{
        path: 'list',
        name: 'list',
        component: () => import('../pages/list'),
    }],
}]