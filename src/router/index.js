import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
Vue.use(Router)

const router = new Router({
    mode: 'history',
    //base: '/',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    //访问不存在的路由
    if (!to.name) {
        let to = { path: from.path }
        return next(to)
    }
    next()
})

export default router
