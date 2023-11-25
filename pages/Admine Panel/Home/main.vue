<template>
    <div>
        <div class="main">
            <div class="title">
                مدیریت محتوا
            </div>
            <div class="sliderChanges">
                <img id="currentSliderPic" src="../../../assets/images/SliderPic.png" alt="">
                <button id="changeSliderIcon">
                    <img src="../../../assets/icons/icons8-edit-24.png" alt="">
                </button>
            </div>
            <div class="box">
                <button class="changeItem">
                    <div class="iconContainer">
                        <img src="" alt="">
                    </div>
                    صفحه محصول
                </button>
                <button class="changeItem">
                    <div class="iconContainer">
                        <img src="" alt="">
                    </div>
                    بلاگ
                </button>
                <button class="changeItem">
                    <div class="iconContainer">
                        <img src="" alt="">
                    </div>
                    تماس با ما
                </button>
                <button class="changeItem">
                    <div class="iconContainer">
                        <img src="" alt="">
                    </div>
                    نمونه کارهنرجویان
                </button>
                <button class="changeItem">
                    <div class="iconContainer">
                        <img src="" alt="">
                    </div>
                    دسته بندی
                </button>
                <button class="changeItem">
                    <div class="iconContainer">
                        <img src="" alt="">
                    </div>
                    کارت های دوره
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FrontendMain',

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

<style scoped>
.main {
    margin-right: 25%;
}

.title {
    margin-right: 5%;
    padding-top: 100px;
    padding-bottom: 30px;
    font-family: Yekan Bakh;
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0em;
}

#currentSliderPic {
    width: 90%;
    margin-inline: 5%;
    margin-bottom: -25px;
}

#changeSliderIcon {
    margin-top: -10px;
    margin-inline: 6%;
    background: none;
    border: none;
}

.changeItem {
    background: #F4F4F4;
    width: 29%;
    height: 74px;
    border-radius: 16px;
    margin: 10px;
    border: none;
    font-family: Yekan Bakh;
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: -0.03em;

}

.changeItem:hover {
    border: solid 1px #bca5ea;
}

.box {
    text-align: center;
    margin-top: 50px;
}

.iconContainer {
    width: 42px;
    height: 42px;
    border-radius: 8px;
    background: linear-gradient(221.42deg, #8569C2 0.18%, #B6A5DA 100%);
    margin-right: 5%;
}
</style>