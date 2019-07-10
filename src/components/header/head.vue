<template>
    <header id="head-top">
        <slot name="logo"></slot>
        <!-- <slot name="search"></slot> -->
        <!-- 返回按钮 -->
        <section class="head_goback" v-if="goBack" @click="$route.go(-1)">
            <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <polyline points="12,18 4,9 12,0" style="fill:none; stroke:rgb(255, 255, 255); stroke-width:2"/>
            </svg>
        </section>
        <router-link :to="userInfo ? '/profile' : '/login'" v-if="signinUp" class="head_login">
            <svg class="user_avatar" v-if="userInfo">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"/>
            </svg>
            <span class="login_span" v-else>登录|注册</span>
        </router-link>
        <!-- <section>
            <span>{{headerTitle}}</span>
        </section> -->
        <slot name="edit"></slot>
        <slot name="msite-title"></slot>
        <slot name="changeCity"></slot>
        <slot name="changeLogin"></slot>
    </header>
</template>


<script>
    import {mapState, mapActions} from 'vuex';
    export default {
        props: ['goBack', 'signinUp', 'headerTitle'],
        data() {
            return {
            
            }
        },
        mounted() {
            //获取用户信息
            this.getUserInfo();
        },
        computed: {
            ...mapState([
                'userInfo'
            ]),
        },
        methods: {
            ...mapActions([
                'getUserInfo'
            ]),
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    #head-top {
        background-color: $blue;
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0;
        @include wh(100%, 1.95rem);
    }
    .head_login {
        right: 0.55rem;
        @include sc(0.65rem, #fff);
        line-height: 2.2rem;
        @include ct;
        .login_span {
            color: #fff;
        }
        .user_avatar {
            fill: #fff;
            @include wh(.8rem, .8rem);
        }
    }
    
</style>