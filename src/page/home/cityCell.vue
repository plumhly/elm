<template>
    <div class="container">
        <h4 class="city-title">
            {{letter}}
            <span v-if='letter === "A"'>(按字母顺序)</span>
        </h4>
        <ul class="city-item clear">
            <router-link :to="'/city/' + city.id" tag="li" v-for="city in cities" :key="city.id">
                {{city.name}}
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        letter: {
            type: String,
            default:''
        },
        cities: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
    @import "../../style/mixin";
    .container {
        background-color: #fff;
    }
    .city-title {
        margin-top: 0.37rem;
        padding-left: 0.35rem;
        @include wh(100%, 1.29rem);
        @include font(0.41rem, 1.29rem);
        border-top: 2px solid $bc;
        border-bottom: 1px solid $bc;
        color: #666;
        span {
            color: #999;
            padding-left: 0.27rem;
        }
    }
    .city-item {
        border-bottom: 1px solid $bc;
        li {
            float: left;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            @include wh(25%, 1.57rem);
            @include font(0.5rem, 1.57rem);
            text-align: center;
            border-right: 1px solid $bc;
            border-bottom: 1px solid $bc;
        }
    }
</style>
