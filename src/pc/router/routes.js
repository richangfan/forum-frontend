import layout from '../layout.vue'

export default [
    {
        path: '/',
        redirect: '/post/list/1'
    },
    {
        path: '/post',
        component: layout,
        children: [
            {
                path: 'list/:page',
                name: 'list',
                component: () => import(/* webpackChunkName: "pc.list" */ '../views/list.vue')
            },
            {
                path: 'detail/:id',
                name: 'detail',
                component: () => import(/* webpackChunkName: "pc.detail" */ '../views/detail.vue')
            }
        ]
    },
    {
        path: '/user',
        component: layout,
        children: [
            {
                path: 'register',
                name: 'register',
                component: () => import(/* webpackChunkName: "pc.register" */ '../views/register.vue')
            },
            {
                path: 'login',
                name: 'login',
                component: () => import(/* webpackChunkName: "pc.login" */ '../views/login.vue')
            },
        ]
    },
]
