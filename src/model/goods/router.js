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
                path: 'domestic',
                name: 'domestic',
                meta: {
                    title: '国产水果'
                },
                component: () => import('./views/domestic')
            },
            {
                path: 'entrance',
                name: 'entrance',
                meta: {
                    title: '进口水果'
                },
                component: () => import('./views/entrance')
            },
            {
                path: 'sarcocarp',
                name: 'sarcocarp',
                meta: {
                    title: '果肉制品'
                },
                component: () => import('./views/sarcocarp')
            },
            {
                path: 'chemical',
                name: 'chemical',
                meta: {
                    title: '有机化肥'
                },
                component: () => import('./views/chemical')
            },
            {
                path: 'boutique',
                name: 'boutique',
                meta: {
                    title: '精品礼盒'
                },
                component: () => import('./views/boutique')
            }
        ]
    }
]