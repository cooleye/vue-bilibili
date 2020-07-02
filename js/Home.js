

/*------------------首页组件------------------- */
var Home = Vue.component("home",{
    template:'#home',
    data(){
        return{
            videos:[],
            menuList:[
                {id:0,title:"首页",url:'/home/0'},
                {id:1,title:"动画",url:'/home/1'},
                {id:2,title:"番剧",url:'/home/2'},
                {id:3,title:"国创",url:'/home/3'},
                {id:4,title:"音乐",url:'/home/4'},
            ],
            swiperList:[
                './static/b1.jpg','./static/b2.jpg','./static/b3.jpg',
            ]
        }
    },
    mounted() {
       this.initSwiper();
       this.getHomeData()
    },
    methods: {
        initSwiper(){
            var swiper = new Swiper('.swiper-container', {
                pagination: {el: '.swiper-pagination'},
                autoplay:true
            });
        },
        getHomeData(){
            $.get('https://www.fastmock.site/mock/e5235ba89a269aad3a0c14cd975023bf/api/home',res => {
                this.videos = res;
            })
        }
    },
})

