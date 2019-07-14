<template>
    <div class="container">
        <tab-bar></tab-bar>
    </div>
</template>

<script>
import tabBar from "../../components/footer/footerGuide";
export default {
    components: {
        tabBar
    }
}
</script>


<style lang="scss" scoped>
    .container {
        background-color: #999;
    }
</style>
