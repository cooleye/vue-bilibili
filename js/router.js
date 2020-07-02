/** 路由配置文件 */
var router = new VueRouter({
    routes: [
        {
            path:"/",
            redirect:"/home/0"
        },
        {
            path:"/home/:tab",
            component: Home
        },
        {
            path:"/detail/:id",
            component: Detail,
            children:[
                {
                    path:'/detail/reco',
                    component: Recomond
                },
                {
                    path:'/detail/comm',
                    component: Comment
                }
            ]
        },
    ]
})