

/*------------------首页组件------------------- */
var Home = Vue.component("home",{
    template:'#home',
    data(){
        return{
            videos:[],
            // showAllMenu:false,
            menuList:[
                {id:0,title:"首页",url:'/home/0'},
                {id:1,title:"动画",url:'/home/1'},
                {id:2,title:"番剧",url:'/home/2'},
                {id:3,title:"国创",url:'/home/3'},
                {id:4,title:"音乐",url:'/home/4'},
            ],
            allMenu:[
                {id:0,title:"首页",url:'/home/0'},
                {id:1,title:"动画",url:'/home/1'},
                {id:2,title:"番剧",url:'/home/2'},
                {id:3,title:"国创",url:'/home/3'},
                {id:4,title:"音乐",url:'/home/4'},
                {id:5,title:"首页",url:'/home/5'},
                {id:6,title:"动画",url:'/home/6'},
                {id:7,title:"番剧",url:'/home/7'},
                {id:8,title:"国创",url:'/home/8'},
                {id:9,title:"音乐",url:'/home/9'},
                {id:10,title:"首页",url:'/home/10'},
                {id:11,title:"动画",url:'/home/11'},
                {id:12,title:"番剧",url:'/home/12'},
                {id:13,title:"国创",url:'/home/13'},
                {id:14,title:"音乐",url:'/home/14'},
            ],
            swiperList:[
                './static/b1.jpg','./static/b2.jpg','./static/b3.jpg',
            ]
        }
    },
    watch: {
        $route(){
            let tab = this.$route.params.tab;
            console.log(tab)
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
        },
        moreMenu(){
            $('.all-menu').slideDown()
        },
        menuSlideUp(){
            $('.all-menu').slideUp()
        }
    },
})

