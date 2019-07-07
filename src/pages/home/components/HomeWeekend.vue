<template>
    <div class="recommend">
        <div class="recommend-title">
            周末去哪儿
        </div>
        <div class="recommend-list" v-for="(item,index) of weekendList" :key="item.id">
            <div class="recommend-list border-bottom">
                <img :src="item.imgUrl"/>
                <div>
                    <p class="recommend-name">{{item.title}}</p>
                    <p class="recommend-content">{{item.desc}}</p>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name:'HomeWeekend',
    props:{
        weekendList:Array
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
        padding-bottom: .1rem;
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