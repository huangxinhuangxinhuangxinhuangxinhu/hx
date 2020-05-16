export default [
    {
        path: 'goods',
        name: 'goods',
        meta: {
            title: '商品管理'
        },
        component: () => import('./views/index'),
        children: [
            {
                path: 'home',
                name: 'home',
                meta: {
                    title: '首页商品'
                },
                component: () => import('./views/home')
            },
            {
                path: 'domf',
                name: 'domf',
                meta: {
                    title: '国产水果'
                },
                component: () => import('./views/domf')
            },
            {
                path: 'impf',
                name: 'impf',
                meta: {
                    title: '进口水果'
                },
                component: () => import('./views/impf')
            },
            {
                path: 'pup',
                name: 'pup',
                meta: {
                    title: '果肉制品'
                },
                component: () => import('./views/pup')
            },
            {
                path: 'org',
                name: 'org',
                meta: {
                    title: '有机化肥'
                },
                component: () => import('./views/org')
            },
            {
                path: 'box',
                name: 'box',
                meta: {
                    title: '精品礼盒'
                },
                component: () => import('./views/box')
            },

            /********************  新增and修改  ***************************/

            {
                path:'addUpdateBox',
                name:'addUpdateBox',
                component:()=>import('./add-update/box-update')
            },
            {
                path:'addUpdateHome',
                name:'addUpdateHome',
                component:()=>import('./add-update/home-update')
            },
            {
                path:'addUpdateDomf',
                name:'addUpdateDomf',
                component:()=>import('./add-update/domf-update')
            },
            {
                path:'addUpdateImpf',
                name:'addUpdateImpf',
                component:()=>import('./add-update/impf-update')
            },

        ]
    }
]