<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,key) of pages" :key="key">
                <div class="icon" v-for="(item,index) of page" :key="index">
                    <div>
                        <img :src="item.imgUrl"/>
                    </div>
                    <p>{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {
    name:'HomeIcons',
    props:{
        iconList:Array
    },
    data (){
        return {
            swiperOption: {
                pagination: {
                    effect : 'flip',
                },
            },

        };
    },
    computed:{
        pages (){
            const pages = [];
            var i = 0;
            this.iconList.forEach((item, index) => {
                if(!pages[i]){
                    pages[i] = [];
                }
                if(pages[i].length >= 8){
                    ++i;
                    pages[i] = [];
                    pages[i].push(item);
                }else{
                    pages[i].push(item);
                }
            });
            return pages;

            // const pages = []
            // this.list.forEach((item, index) => {
            //     const page = Math.floor(index / 8)
            //     if (!pages[page]) {
            //         pages[page] = []
            //     }
            //     pages[page].push(item)
            // })
            // return pages
        }
    }

}
</script>
<style lang="stylus" scoped>

    .icons{
        overflow: hidden;
        width: 100%;
        height: 0;
        padding-bottom: 57%;
    }
    .icon{
        float: left;
        width: 25%;
    }
    .icon div{
        margin: 0.3rem;
    }
    .icon img{
        width: 100%;
    }
    .icon p{
        text-align: center;
    }
</style>