let router = [
    {
        path: '1',
        name: '商品管理',
        Iconfont: 'el-icon-message',//图标
        children: [
            {
                path: '/manage/goods/home',
                name: '首页商品',
            },
            {
                path: '/manage/goods/domf',
                name: '国产水果',
            },
            {
                path: '/manage/goods/impf',
                name: '进口水果',
            },
            {
                path: '/manage/goods/pup',
                name: '果肉制品',
            },
            {
                path: '/manage/goods/org',
                name: '有机化肥',
            },
            {
                path: '/manage/goods/box',
                name: '精品礼盒',
            },
        ]
    },
    {
        path: '2',
        name: '用户管理',
        Iconfont: 'el-icon-message',//图标
        children: [
            {
                path: '/manage/user/message',
                name:'用户信息'
            }
        ]
    },
    {
        path: '3',
        name: '订单管理',
        Iconfont: 'el-icon-message',//图标
        children: [
            {
                path: '/manage/order/message',
                name:'订单信息'
            }
        ]
    }
]

export default router