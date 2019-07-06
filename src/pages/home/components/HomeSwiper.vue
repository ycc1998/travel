<template>

    <div class="swiper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of list">
                <img class="swiper-img" :src="item.img" />
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'HomeSwiper',
        data () {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                        clickable :true,
                        loop :true
                    },
                },
                list:[
                    {id:1,img:'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/31746/32/1528/111163/5c500f8aEe3c6c0e7/0e1519939f544e8d.jpg!cr_1125x549_0_72!q70.jpg.dpg'},
                    {id:2,img:'https://imgcps.jd.com/ling4/4155894/6byg5qCH54iG5qy-5paw5L2O/55WF5Lqr5ZOB6LSo55Sf5rS7/p-5c122d3d82acdd181d182945/282ad1e6/cr_1125x549_0_72/s1125x690/q70.jpg'}
                ]
            }
        },

    }
</script>
<style>

    .swiper /deep/ .swiper-pagination-bullet-active
    {
        background: #fff;
    }



    .swiper{
        width: 100%;
        overflow: hidden;
        padding-bottom: 48.1%;
        height: 0;
    }

    .swiper-img{
        width: 100%;
    }
</style>