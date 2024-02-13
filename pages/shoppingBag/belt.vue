<template>
    <div>
        <div class="navBelt">
            <h1>سبد خرید</h1>
            <p>خانه انیمو/سبد خرید</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FrontendBelt',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
@font-face {
    font-family: 'Yekan Bakh';
    src: url('~/assets/Fonts/Yekan Bakh Regular/Yekan Bakh Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
.navBelt {
    width: 100%;
    height: 67px;
    background: #F4F4F4;
    padding-right: 5%;
    margin-top: 50px;
    padding-top: 10px;
}

.navBelt h1 {
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 24px;
    font-weight: 600;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: right;
    padding: 5px;
}

.navBelt p {
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: right;
    color: #979797;
    padding: 5px;
}
</style>