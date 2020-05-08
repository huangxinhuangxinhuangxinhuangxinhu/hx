export default [
    {
        path: 'order',
        name: 'order',
        meta: {
            title: '订单管理'
        },
        component: () => import('./views/index'),
        children: [
            {
                path: 'message',
                name: 'message',
                meta: {
                    title: '订单信息'
                },
                component: () => import('./views/message'),
            }
        ]
    }
]