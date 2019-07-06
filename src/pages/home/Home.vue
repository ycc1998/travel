<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
    </div>

</template>

<script>
    import homeHeader from  './components/HomeHeader';
    import homeSwiper from  './components/HomeSwiper';

    export default {
        name: 'Home',
        components:{
            homeHeader,
            homeSwiper
        }

    }
</script>