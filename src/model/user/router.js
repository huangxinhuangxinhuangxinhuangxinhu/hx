export default [
    {
        path: 'user',
        name: 'user',
        meta: {
            title: '用户管理'
        },
        component: () => import('./views/index'),
        children:[
            {
                path:'message',
                naem:'message',
                meta:{
                    title:'用户信息'
                },
                component:()=>import('./views/message')
            }
        ]
    }
]