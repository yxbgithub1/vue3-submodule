export default [{
    path: '/serve',
    name: 'serve',
    component: () => import('../pages/serve'),
    redirect: '/serve/inquiry',
    children: [{
        path: 'aviation',
        name: 'aviation',
        component: () => import('../pages/aviation'),
    }, {
        path: 'contact',
        name: 'contact',
        component: () => import('../pages/contact'),
    }, {
        path: 'contraband',
        name: 'contraband',
        component: () => import('../pages/contraband'),
    }, {
        path: 'faq',
        name: 'faq',
        component: () => import('../pages/faq'),
    }, {
        path: 'inquiry',
        name: 'inquiry',
        component: () => import('../pages/inquiry'),
    }, {
        path: 'map',
        name: 'map',
        component: () => import('../pages/map'),
    }, {
        path: 'router',
        name: 'router',
        component: () => import('../pages/router'),
    }, {
        path: 'serve',
        name: 'serve',
        component: () => import('../pages/serve'),
    }, {
        path: 'waybill',
        name: 'waybill',
        component: () => import('../pages/waybill'),
    }]
}]