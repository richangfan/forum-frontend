export default [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        title: '',
        children: [
            {
                path: '',
                name: 'home',
                title: '',
                icon: 'md-home',
                component: () => import(/* webpackChunkName: "admin.home" */ '../views/home.vue')
            }
        ]
    }
]
