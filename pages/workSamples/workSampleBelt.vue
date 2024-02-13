<template>
    <div>
        <div class="container">
            <h1>نمونه کار هنرجویان</h1>
            <p>خانه انیمو/نمونه کار هنرجویان</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FrontendWorkSampleNav',

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
    src: url('/assets/Fonts/Yekan Bakh Regular/Yekan Bakh Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
img{
    padding-right: 15%;
}
.container{
    background: #F4F4F4;
    height: 67px;
    width: 100%;
    padding-block: 15px;
    padding-right: 5%;
}

h1 {
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 24px;
    font-weight: 600;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: right;
    margin-bottom: 10px;

}

p {
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: right;
    color: #979797;
}
</style>