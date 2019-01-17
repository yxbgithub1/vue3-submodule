export default [{
    path: '/admin',
    name: 'admin',
    component: () => import('../pages/admin'),
    redirect: '/admin/index',
    children: [{
        path: 'address',
        name: 'address',
        component: () => import('../pages/address'),
    }, {
        path: 'bill',
        name: 'bill',
        component: () => import('../pages/bill'),
    }, {
        path: 'client-quote',
        name: 'client-quote',
        component: () => import('../pages/client-quote'),
    }, {
        path: 'index',
        name: 'index',
        component: () => import('../pages/index'),
    }, {
        path: 'invoice',
        name: 'invoice',
        component: () => import('../pages/invoice'),
    }, {
        path: 'orders',
        name: 'orders',
        component: () => import('../pages/orders'),
    }, {
        path: 'prestore',
        name: 'prestore',
        component: () => import('../pages/prestore'),
    }, {
        path: 'print',
        name: 'prestore',
        component: () => import('../pages/print'),
    }, {
        path: 'proxy-quote',
        name: 'proxy-quote',
        component: () => import('../pages/proxy-quote'),
    }, {
        path: 'setting',
        name: 'setting',
        component: () => import('../pages/setting'),
    }, {
        path: 'waybills',
        name: 'waybills',
        component: () => import('../pages/waybills'),
    }]
}]