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
            <section class="input_container">
                <input placeholder="验证码" v-model="verifyCode"/>
            </section>
        </form>
    </div>
</template>

<script>
import navBar from '../../components/header/navigationBar';
export default {
    components: {
        navBar
    },
    data() {
        return {
            account: null,  //账号
            oldPassword: null, //旧密码
            newPassword: null, //新密码
            newPasswordAgain: null, //确认密码
            verifyCode: null, //验证码
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
                    width: 100%;
                    @include font(.56rem, .56rem);
                    @include ct;
                    &::placeholder {
                        font-weight: 700; 
                    }
                }
            }
        }
    }
</style>
