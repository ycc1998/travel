<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page,key) of pages" :key="key">
                <div class="icon" v-for="(item,index) of page" :key="index">
                    <div>
                        <img :src="item.img"/>
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
    data (){
        return {
            iconList:[
                {
                    id:1,
                    img:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png.webp',
                    desc:'热门景区'
                },
                {
                    id:2,
                    img:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png.webp',
                    desc:'热门景区'
                },
                {
                    id:3,
                    img:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png.webp',
                    desc:'热门景区'
                },
                {
                    id:4,
                    img:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png.webp',
                    desc:'热门景区'
                },
                {
                    id:5,
                    img:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png.webp',
                    desc:'热门景区'
                },
                {
                    id:6,
                    img:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png.webp',
                    desc:'热门景区'
                },
                {
                    id:7,
                    img:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png.webp',
                    desc:'热门景区'
                },
                {
                    id:8,
                    img:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png.webp',
                    desc:'热门景区'
                },
                {
                    id:9,
                    img:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png.webp',
                    desc:'热门景区'
                }
            ]
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
<style>

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