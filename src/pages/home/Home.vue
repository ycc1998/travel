<template>
    <div>
        <home-header :city="city"></home-header>
        <home-swiper v-bind:swiperList="swiperList"></home-swiper>
        <home-icons v-bind:iconList="iconList"></home-icons>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>

</template>

<script>
    import homeHeader from  './components/HomeHeader';
    import homeSwiper from  './components/HomeSwiper';
    import homeIcons from  './components/HomeIcons';
    import homeRecommend from  './components/HomeRecommend';
    import homeWeekend from  './components/HomeWeekend';
    import axios from 'axios';

    export default {
        name: 'Home',
        data () {
            return {
                city:'',
                swiperList:[],
                iconList:[],
                recommendList:[],
                weekendList:[]
            }
        },
        components:{
            homeHeader,
            homeSwiper,
            homeIcons,
            homeRecommend,
            homeWeekend
        },
        methods:{
          getInfo(){
              axios.get('/index.json').then((res) => {
                  if(res.data){
                      const data = res.data.data;
                     this.city = data.city;
                     this.swiperList = data.swiperList;
                     this.iconList = data.iconList;
                     this.recommendList = data.recommendList;
                     this.weekendList = data.weekendList;
                  }
              })
          }
        },
        mounted (){
            this.getInfo();
        }

    }
</script>