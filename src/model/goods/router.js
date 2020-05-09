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
            }
        ]
    }
]