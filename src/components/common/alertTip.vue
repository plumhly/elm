<template>
    <div class="container">
        <section class="alert_container">
            <div class="icon">
                <span></span>
                <span></span>
            </div>
            <p>{{content}}</p>
            <div class="button" @click="$emit('alertConfirm')">确认</div>
        </section>
    </div>
</template>

<script>
export default {
    props: ['content'],
}
</script>

<style lang="scss" scoped>
@import "../../style/mixin";

    @keyframes move_in {
        0%   { transform: scale(1) }
        35%  { transform: scale(1.2) }
        70%  { transform: scale(.8) }
        100% { transform: scale(1) }
    }
    div .container {
        background-color: transparent;
        position: absolute;
        animation: move_in .4s;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 2000;
        .alert_container {
            @include center;
            @include wh(10.88rem, 7.15rem);
            background-color: #fff;
            padding-top: 0.5rem;
            border-radius: .14rem;
            .icon {
                @include hc;
                @include wh(2.74rem, 2.74rem);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                border: .14rem solid #f8cb86;
                span:first-child {
                    margin-bottom: 0.17rem;
                    @include wh(0.12rem, 1.45rem);
                    background-color: #f8cb86;
                }
                span:last-child {
                    @include wh(.19rem, .19rem);
                    background-color: #f8cb86;
                    border-radius: 50%;
                }
            }
            p {
                font-size: .6rem;
                margin: 3.29rem 0 0.77rem;
                text-align: center;
            }
            .button {
                position: absolute;
                left: 0;
                bottom: 0;
                @include wh(100%, 1.62rem);
                @include font(.68rem, 1.62rem);
                color: #fff;
                font-weight: 700;
                text-align: center;
                border-bottom-left-radius: 4px;
                border-bottom-right-radius: 4px;
                background-color: #4cd964;
            }
        }
    }

</style>
