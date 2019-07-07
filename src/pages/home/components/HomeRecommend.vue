<template>
    <div class="recommend">
        <div class="recommend-title">
            热门推荐
        </div>
        <div class="recommend-list" v-for="(item,index) of recommendList" :key="item.id">
            <div class="recommend-list border-bottom">
                <img :src="item.imgUrl"/>
                <div>
                    <p class="recommend-name">{{item.title}}</p>
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
    props:{
        recommendList:Array
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
        margin-right: .2rem;
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