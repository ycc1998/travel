<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
        <home-weekend></home-weekend>
    </div>

</template>

<script>
    import homeHeader from  './components/HomeHeader';
    import homeSwiper from  './components/HomeSwiper';
    import homeIcons from  './components/HomeIcons';
    import homeRecommend from  './components/HomeRecommend';
    import homeWeekend from  './components/HomeWeekend';

    export default {
        name: 'Home',
        components:{
            homeHeader,
            homeSwiper,
            homeIcons,
            homeRecommend,
            homeWeekend
        }

    }
</script>