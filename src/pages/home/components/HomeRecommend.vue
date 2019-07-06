<template>
    <div class="recommend">
        <div class="recommend-title">
            热门推荐
        </div>
        <div class="recommend-list" v-for="(item,index) of list" :key="item.id">
            <div class="recommend-list border-bottom">
                <img :src="item.img"/>
                <div>
                    <p class="recommend-name">{{item.name}}</p>
                    <p class="recommend-content">{{item.desc}}</p>
                    <button class="recommend-button">查看详情</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'HomeRecommend',
    data (){
        return {
            list:[
                {
                    id:1,
                    img:'https://img14.360buyimg.com/n2/s240x240_jfs/t10690/249/1626659345/69516/b3643998/59e4279aNff3d63ac.jpg!q70.jpg',
                    name:'苹果手机免费玩',
                    desc:'苹果x，2018年9月上市搭载最强IOS11处理器，配置最先进的人脸识别技术'
                },
                {
                    id:2,
                    img:'https://img14.360buyimg.com/n2/s240x240_jfs/t10690/249/1626659345/69516/b3643998/59e4279aNff3d63ac.jpg!q70.jpg',
                    name:'苹果手机免费玩',
                    desc:'苹果x，2018年9月上市搭载最强IOS11处理器，配置最先进的人脸识别技术'
                },
                {
                    id:3,
                    img:'https://img14.360buyimg.com/n2/s240x240_jfs/t10690/249/1626659345/69516/b3643998/59e4279aNff3d63ac.jpg!q70.jpg',
                    name:'苹果手机免费玩',
                    desc:'苹果x，2018年9月上市搭载最强IOS11处理器，配置最先进的人脸识别技术'
                },
                {
                    id:4,
                    img:'https://img14.360buyimg.com/n2/s240x240_jfs/t10690/249/1626659345/69516/b3643998/59e4279aNff3d63ac.jpg!q70.jpg',
                    name:'苹果手机免费玩',
                    desc:'苹果x，2018年9月上市搭载最强IOS11处理器，配置最先进的人脸识别技术'
                },
                {
                    id:5,
                    img:'https://img14.360buyimg.com/n2/s240x240_jfs/t10690/249/1626659345/69516/b3643998/59e4279aNff3d63ac.jpg!q70.jpg',
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
        float: left;
        width: 1.7rem;
        height: 1.7rem;
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
    .recommend-button{
        line-height: .44rem;
        margin-top: .16rem;
        background: #ff9300;
        padding: 0 .2rem;
        border-radius: .06rem;
        color: #fff
    }
</style>