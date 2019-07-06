<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont">&#xe60e;</div>
        </div>
        <div class="header-input"><span class="iconfont">&#xe613;</span>输入城市/景点/主题</div>
        <div class="header-right">城市<span class="iconfont">&#xe6aa;</span></div>
    </div>
</template>

<script>
    export default {
        name: 'HomeHeader',
    }
</script>

<style lang="stylus" scoped>
@import '~@/static/styles/varibles.styl';

    .header{
        background: $bgcolor;
        display: flex;
        color:#fff;
        line-height: .86rem;
    }
    .header-left{
        float: left;
        width: .64rem;
    }

    .header-left div{
        font-size: .5rem;
        text-align: center;
    }

    .header-input{
        color: #636363;
        flex: 1;
        height: .66rem;
        background: #fff;
        border-radius: .1rem;
        margin: .1rem;
        line-height: .7rem;
    }

    .header-input span{
        padding: 0 .05rem;
    }

    .header-right{
        float: right;
        width: 1.24rem;
        text-align: center;
    }

</style>