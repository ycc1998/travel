<template>

    <div class="swiper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList">
                <img class="swiper-img" :src="item.imgUrl" />
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'HomeSwiper',
        props:{
            swiperList:Array
        },
        data () {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                        clickable :true,
                        loop :true
                    },
                },

            }
        },

    }
</script>
<style lang="stylus" scoped>

    .swiper /deep/ .swiper-pagination-bullet-active
    {
        background: #fff;
    }



    .swiper{
        width: 100%;
        overflow: hidden;
        padding-bottom: 31.5%;
        height: 0;
    }

    .swiper-img{
        width: 100%;
    }
</style>