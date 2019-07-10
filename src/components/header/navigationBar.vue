<template>
    <div class="header">
        <section class="arrow_left" v-if="goBack" @click="$router.go(-1)">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
            </svg>
        </section>
        <h4 class="title">{{title}}</h4>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        goBack: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../style/mixin";
    .header {
        @include wh(100%, 1.76rem);
        background-color: $blue;
        position: relative;
        color: #fff;
        @include font(0.7rem, 0.73rem);
        font-weight: 700;
        .arrow_left {
            @include wh(.43rem, 0.73rem);
            @include ct;
            left: 0.43rem;
        }
        .title {
            color: #fff;
            line-height: 1.76rem;
            text-align: center;
        }
    }
    

</style>
