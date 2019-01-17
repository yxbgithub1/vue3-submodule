import { unionRoutes } from './utils'

const moduleContext = require.context('../views', true, /store\/index\.js$/)
    , subRouters = unionRoutes(require.context('../views', true, /router\/index\.js$/))
moduleContext.keys().forEach(moduleContext)

const routes = [{
    path: '/',
    name: 'home',
    component: () => import('@views/Home'),
    children: [
        ...subRouters
    ],
    redirect: subRouters.length ? subRouters[0] : '/404'
}, {
    path: '/404',
    name: '404',
    component: () => import('@views/404')
}]

export default routes