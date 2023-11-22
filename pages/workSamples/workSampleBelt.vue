<template>
    <div>
        <div class="container">
            <h1>نمونه کار هنرجویان</h1>
            <p>خانه انیمو/نمونه کار هنرجویان</p>
            <div class="sortBy">
                <div class="btn">
                    نمایش بر اساس
                    <img src="../../assets/icons/Vector (4).png" alt="">
                    <div class="dropDown">

                    </div>
                </div>
            </div>
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
.container{
    background: #F4F4F4;
    height: 67px;
    width: 100%;
    padding-block: 15px;
    padding-right: 5%;
}

h1 {
    font-family: Yekan Bakh;
    font-size: 24px;
    font-weight: 600;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: right;
    margin-bottom: 10px;

}

p {
    font-family: Yekan Bakh;
    font-size: 16px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: right;
    color: #979797;
}
.btn{
    border: 1px solid #8569C2;
    color : #8569C2;
    height: 44px;
    border-radius: 45px;
    width: 9%;
    padding-top: 10px;
    padding-right: 1%;
    margin-right: 85%;
    margin-top: -44px;
    cursor: pointer;
}
.btn :hover{

}
</style>