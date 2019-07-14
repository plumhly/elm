<template>
    <div class="container">
        <nav-bar title="重置密码"></nav-bar>
        <form class="from_container">
            <section class="input_container">
                <input placeholder="账号" v-model="account"/>
            </section>
            <section class="input_container">
                <input placeholder="旧密码" v-model="oldPassword"/>
            </section>
            <section class="input_container">
                <input placeholder="请输入新密码" v-model="newPassword"/>
            </section>
            <section class="input_container">
                <input placeholder="请确认密码" v-model="newPasswordAgain"/>
            </section>
            <section class="input_container verify_container">
                <input placeholder="验证码" v-model="verifyCode"/>
                <img :src="imageData"/>
                <div class="verify_tip_container" @click="getVerifyCode">
                    <p>看不清</p>
                    <p>换一张</p>
                </div>
            </section>
        </form>
        <div class="change_button" @click="changePassword">
            确认修改
        </div>
        <alert-tip :content="tip" @alertConfirm="this.showTip = false" v-show="showTip"></alert-tip>
    </div>
</template>

<script>
import navBar from '../../components/header/navigationBar';
import alertTip from '../../components/common/alertTip';
import {getCaptchas, changePassword} from '../../service/getDatas';
export default {
    created() {
        this.getVerifyCode();
    },
    components: {
        navBar,
        alertTip
    },
    data() {
        return {
            account: null,  //账号
            oldPassword: null, //旧密码
            newPassword: null, //新密码
            newPasswordAgain: null, //确认密码
            verifyCode: null, //验证码
            imageData: null, //验证码
            tip: null, //弹框提示
            showTip: false,//显示弹框
        }
    },
    methods: {
        async getVerifyCode() {
            let result = await getCaptchas();
            this.imageData = result.code;
        },
        async changePassword() {
            this.showTip = !this.account || !this.oldPassword || !this.newPassword || !this.newPasswordAgain || this.newPassword !== this.newPasswordAgain;
            if (!this.account) {
                this.tip = "请输入用户名";
                return;
            }
            if (!this.oldPassword) {
                this.tip = "请输入旧密码";
                return;
            }
            if (!this.newPassword) {
                this.tip = "请输入新密码";
                return;
            }
            if (!this.newPasswordAgain) {
                this.tip = "请输入确认密码";
                return;
            }
            if (this.newPassword !== this.newPasswordAgain) {
                this.tip = "两次输入的密码不一样";
                return;
            }

            if (!this.verifyCode) {
                this.tip = "请输入验证码";
                return;
            }

            let result = await changePassword(this.account, this.oldPassword, this.newPassword, this.newPasswordAgain, this.verifyCode);
            if (result.message) {
                // error
                this.showTip = true;
                this.tip = result.message;
                if (result.type === 'ERROR_CAPTCHA') {
                    this.getVerifyCode();
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>

    @import '../../style/mixin';
    .container {
        background-color: $bgc;
        .from_container {
            margin-top: .52rem;
            .input_container {
                position: relative;
                background-color: #fff;
                color: #a9a9a9;
                height: 1.86rem;
                border-bottom: 1px solid $bdc;
                padding-left: .79rem;
                input {
                    // width: 100%;
                    @include font(.56rem, .56rem);
                    @include ct;
                    &::placeholder {
                        font-weight: 700; 
                    }
                }
            }
            .verify_container {
                img {
                    @include ct;
                    @include wh(2.92rem, 1.18rem);
                    right: 2.69rem;
                }
                .verify_tip_container {
                    @include ct;
                    right: .41rem;
                    padding: .25rem .37rem;
                    display: flex;
                    flex-direction: column;
                    align-content: space-between;
                    font-size: .48rem;
                    p:first-child {
                        color: #666;
                    }
                    p:last-child {
                        color: $blue;
                    }
                }
            }
        }
        .change_button {
            height: 1.84rem;
            margin: .91rem .43rem 0;
            background-color: #4cd964;
            font-size: .58rem;
            font-weight: 700;
            line-height: 1.84rem;
            color: #fff;
            text-align: center;
            border-radius: .1rem;

        }
    }
</style>
