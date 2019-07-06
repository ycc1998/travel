<template>
    <div class="recommend">
        <div class="recommend-title">
            周末去哪儿
        </div>
        <div class="recommend-list" v-for="(item,index) of list" :key="item.id">
            <div class="recommend-list border-bottom">
                <img :src="item.img"/>
                <div>
                    <p class="recommend-name">{{item.name}}</p>
                    <p class="recommend-content">{{item.desc}}</p>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name:'HomeWeekend',
    data (){
        return {
            list:[
                {
                    id:1,
                    img:'https://img12.360buyimg.com/cms/jfs/t1/72474/12/2433/184987/5d0ba6b6Eddf48f47/41b24da0248b686a.jpg',
                    name:'苹果手机免费玩',
                    desc:'苹果x，2018年9月上市搭载最强IOS11处理器，配置最先进的人脸识别技术'
                },
                {
                    id:2,
                    img:'https://img12.360buyimg.com/cms/jfs/t1/72474/12/2433/184987/5d0ba6b6Eddf48f47/41b24da0248b686a.jpg',
                    name:'苹果手机免费玩',
                    desc:'苹果x，2018年9月上市搭载最强IOS11处理器，配置最先进的人脸识别技术'
                },
                {
                    id:3,
                    img:'https://img12.360buyimg.com/cms/jfs/t1/72474/12/2433/184987/5d0ba6b6Eddf48f47/41b24da0248b686a.jpg',
                    name:'苹果手机免费玩',
                    desc:'苹果x，2018年9月上市搭载最强IOS11处理器，配置最先进的人脸识别技术'
                },
                {
                    id:4,
                    img:'https://img12.360buyimg.com/cms/jfs/t1/72474/12/2433/184987/5d0ba6b6Eddf48f47/41b24da0248b686a.jpg',
                    name:'苹果手机免费玩',
                    desc:'苹果x，2018年9月上市搭载最强IOS11处理器，配置最先进的人脸识别技术'
                },
                {
                    id:5,
                    img:'https://img12.360buyimg.com/cms/jfs/t1/72474/12/2433/184987/5d0ba6b6Eddf48f47/41b24da0248b686a.jpg',
                    name:'苹果手机免费玩',
                    desc:'苹果x，2018年9月上市搭载最强IOS11处理器，配置最先进的人脸识别技术'
                }
                ],
        };
    }
}
</script>
<style lang="stylus" scoped>
    @import '~@/static/styles/mixins.styl';
    .recommend{
        margin-top: .3rem;
    }

    .recommend-title{
        padding: .1rem 0 .1rem .2rem;
        line-height: 0.5rem;
        background: #eee;
    }

    .recommend-list{
        padding-bottom: .2rem;
        margin: .1rem;
    }

    .recommend-list img{
        height: 37.09%;
        width: 100%;
    }

    .recommend-name{
        ellipsis()
        font-size: 0.37rem;
        line-height: .7rem;
    }

    .recommend-content{
        ellipsis()
        line-height: .4rem;
        color: #ccc;
    }
    
</style>