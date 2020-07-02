/*------------------视频播放页面------------------- */
var Detail = Vue.component("detail",{
    template:'#detail',
    mounted(){
        let id = this.$route.params.id;
    },
    methods: {
        back(){
            this.$router.push('/')
        }
    },
})
