<template>
    <div class="container">
        <navi-bar title="密码登录"></navi-bar>
        <!-- 输入 -->
        <form class="input_container">
            <section class="input_group">
                <input type="text" placeholder="账号" v-model="account"/>
            </section>
            <section class="input_group">
                <input :type="type" placeholder="密码" v-model="password"/>
                <div class="input_type">
                    <span :class="{security: isRight}">abc...</span>
                    <button :class="{button_left: isLeft, button_right: isRight}" @click="buttonToggle"></button>
                </div>
            </section>
            <section class="input_group">
                <input type="text" placeholder="验证码" v-model="verifyCode"/>
                <img :src="verifyUrl"/>
                <div class="verify_code_container" @click="getVerificode">
                    <p>看不清</p>
                    <p>换一张</p>
                </div>
            </section>
        </form>
        <!-- 提示 -->
        <section class="tip_container">
            <p>温馨提示：没有注册的账号，登录时将自动注册</p>
            <p>注册过的用户可以凭账号密码登录</p>
        </section>
        <!-- <button class="login_button">登录</button> -->
        <div class="login_button" @click="login">登录</div>
        <router-link class="password_reset" to="">重置密码？</router-link>
        <alert-view v-show="paramterEmpty" :content="alertTitle" @alertConfirm="paramterEmpty = false"></alert-view>
    </div>
</template>

<script>
import naviBar from '../../components/header/navigationBar';
import alertView from '../../components/common/alertTip';
import {getCaptchas, accountLogin} from '../../service/getDatas';
import {mapMutations} from 'vuex';
import {RECORD_USERINFO} from '../../store/mutation-types';
export default {
    components: {
        naviBar,
        alertView
    },
    data() {
        return {
            account: null,//账号
            password: null,//密码
            verifyCode: null,//验证码
            verifyUrl: null, //验证码图片
            isRight: false, //按钮在右边
            isLeft: true,//按钮在左边
            type: 'password',//输入框的类型
            paramterEmpty: false,//是否显示警告框
            alertTitle:'',//警告框内容
        }
    },
    mounted() {
        this.getVerificode();
    },
    methods: {
        async getVerificode() {
            let result = await getCaptchas();
            this.verifyUrl = result.code;
        },
        buttonToggle() {
            this.isRight = this.isLeft;
            this.isLeft = !this.isLeft;
            this.type = self.isLeft ? "password" : "text";
        },
        async login() {
            this.paramterEmpty = !this.account || !this.password || !this.verifyCode;
            if (!this.account) {
                this.alertTitle = '请输入手机号/邮箱/用户名';
                return;
            }
            if (!this.password) {
                this.alertTitle = '请输入密码';
                return;
            }
            if (!this.verifyCode) {
                this.alertTitle = '请输入验证码';
                return;
            }
            let result = await accountLogin(this.account, this.password, this.verifyCode);
            if (!result.user_id) {
                this.paramterEmpty = true;
                this.alertTitle = result.message;
            } else {
                this.RECORD_USERINFO(result);
                this.$router.go(-1);
            }
        },
        isRightVerifyCode() {
            return /^\d{4}$/.gi.test(this.verifyCode);
        }

    },
    computed: {
        phoneNumberRight() {
            // return /^1\d{10}^/.gi.test(this.account)
            
        },
        ...mapMutations([
            RECORD_USERINFO
        ]),
    }
}
</script>

<style lang="scss" scoped>
    @import "../../style/mixin";
    .container {
        background-color: #f5f5f5;
        .input_container {
            margin-top: 0.54rem;
            .input_group {
                position: relative;
                @include wh(100%, 1.84rem);
                background-color: #fff;
                border-bottom: 1px solid #f1f1f1;
                .input_type {
                    display: block;
                    @include ct;
                    @include wh(2.5rem, 1.1rem);
                    right: .7rem;
                    span {
                        display: block;
                        margin: .25rem .5rem;
                        border-radius: 0.3rem;
                        background-color: #ccc;
                        @include wh(1.5rem, .6rem);
                        @include font(0.23rem, .6rem);
                    }
                    button {
                        position: absolute;
                        top: 0;
                        left: 0;
                        @include wh(1.1rem, 1.1rem);
                        border-radius: 50%;
                        background-color: #f1f1f1;
                        outline: none;
                    }
                    .button_right {
                        transition: transform .3s;
                        transform: translateX(1.4rem);
                    }
                    .button_left {
                        transition: transform .3s;
                        transform: translateX(0);
                    }
                    .security {
                        background-color: #4cd964;
                    }
                }
                input {
                    margin: 0.5rem 0.68rem;
                }
                img {
                    height: 1.41rem;
                    @include ct;
                    right: 2.82rem;
                }
                .verify_code_container {
                    @include ct;
                    right: .83rem;
                    p {
                        @include font(.48rem, .48rem);
                    }
                    p:first-child {
                        color: #666;
                        margin-bottom: 0.41rem;
                    }
                    p:last-child {
                        color: $blue;
                    }
                }
            }
        }
        .tip_container {
            @include wh(100%, 2.3rem);
            padding-top: 0.39rem;
            padding-left: 0.46rem;
            padding-bottom: 0.35rem;
            p {
                @include font(0.44rem, 0.44rem);
                color: #fe2121;
            }
            p:last-child {
                margin-top: 0.7rem;
            }
        }
        .login_button {
            margin: 0 .44rem 0;
            background-color: #4cd964;
            border-radius: 4px;
            height: 1.82rem;
            text-align: center;
            @include font(.58rem, 1.82rem);
            color: #fff;
        }
        .password_reset {
            float: right;
            padding-right: .5rem;
            color: $blue;
            font-size: .5rem;
            margin-top: .95rem;
        }
    }

</style>
