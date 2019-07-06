<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
    </div>

</template>

<script>
    import homeHeader from  './components/HomeHeader';
    import homeSwiper from  './components/HomeSwiper';
    import homeIcons from  './components/HomeIcons';


    export default {
        name: 'Home',
        components:{
            homeHeader,
            homeSwiper,
            homeIcons
        }

    }
</script>