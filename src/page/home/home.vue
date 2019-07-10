<template>
    <div>
        <head-top signin-up="home">
            <template v-slot:logo>
                <span class="head_logo" @click="reload">ele.me</span>
            </template>
        </head-top>
        <!-- 城市导航 -->
        <nav class="city_nav">
            <div class="city_tip">
                <span>当前定位城市：</span>
                <span>定位不准时，请在城市列表中选择</span>
            </div>
            <router-link class="guess_city" :to="'/city/' + guessCityid">
                <span>{{guessCity}}</span>
                <svg class="arrow_right">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                </svg>
            </router-link>
        </nav>
        <!-- 热门城市 -->
        <section class="hot-city-container">
            <h4 class="hot-city-title">热门城市</h4>
            <ul class="city-list-ul clear">
                <router-link :to="'/city/' + item.id" tag="li" v-for="item in hotcites" :key="item.id">
                    {{item.name}}
                </router-link>
            </ul>
        </section>
        <!-- 城市列表 -->
        <section>
            <city-cell v-for="(letter, index) in sortCity" :key="index" :letter="letter" :cities="allCitys[letter]"></city-cell>
        </section>
    </div>
</template>

<script>
import headTop from '../../components/header/head';
import cityCell from './cityCell';
import {cityGuess, hotcity, allCities} from '../../service/getDatas';
export default {
    data() {
        return {
            guessCity: '',//当前城市
            guessCityid: '',//当前城市ID
            hotcites:[], //热门城市
            allCitys:{}, //所有城市数据
        }
    },
    mounted() {
        cityGuess().then(res => {
            this.guessCity = res.data.name;
            this.guessCityid = res.data.id;
        });

        hotcity().then(res => {
            this.hotcites = res.data;
        });

        allCities().then(res => {
            this.allCitys = res.data;
        });
    },
    components: {
        headTop,
        cityCell
    },
    methods: {
        reload() {
            window.location.reload();
        }
    },
    computed: {
        sortCity() {
            return Object.keys(this.allCitys).sort();
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    .head_logo {
        left: 0.4rem;
        font-weight: 400;
        @include sc(0.7rem, #fff);
        @include wh(2.3rem, 1rem);
        @include ct;
    }
    .city_nav {
        padding-top: 2.35rem;
        border-top: 1px solid $bc;
        background-color: #fff;
        margin-bottom: 0.4rem;
        .city_tip {
            @include fj;
            line-height: 1.45rem;
            padding: 0 0.45rem;
            span:nth-of-type(1) {
                @include sc(0.55rem, #666);
            }
            span:nth-of-type(2) {
                font-weight: 900;
                @include sc(0.475rem, #9f9f9f)
            }
        }
        .guess_city {
            @include fj;
            align-items: center;
            height: 1.8rem;
            padding: 0 0.45rem;
            border-top: 1px solid $bc;
            border-bottom: 2px solid $bc;
            @include font(0.75rem, 1.8rem);
            span:nth-of-type(1) {
                color: $blue;
            }
            .arrow_right {
                @include wh(0.6rem, .6rem);
                color: red;
        }
        }
    }
    // 热门城市
    .hot-city-container {
        margin-top: 0.37rem;
        background-color: #fff;
        .hot-city-title {
            font-weight: 400;
            padding: 0.37rem 0.45rem;
            font-family: "Helvetica Neue";
            @include sc(0.48rem, #666);
            border-top: 2px solid $bc;
            border-bottom: 1px solid $bc;
        }
        .city-list-ul {
            border-bottom: 1px solid $bc;
            li {
                float: left;
                text-align: center;
                line-height: 1.57rem;
                @include sc(0.5rem, $blue);
                @include wh(25%, 1.57rem);
                border-top: 1px solid $bc;
                border-right: 1px solid $bc;
            }
            li:nth-child(4n) {
                border-right: none;
            }
        }
    }
</style>
