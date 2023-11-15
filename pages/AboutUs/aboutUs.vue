<template>
    <div>
        <div class="container">
            <div class="video">
                <video src=""></video>
            </div>
            <div class="introduction">
                <p id="platformIntroduce">معرفی پلتفرم انیمو</p>
                <p id="introducer"> {{ introducer }} </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FrontendAboutUs',

    data() {
        return {
            introducer: "مهدی مؤلف "
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.container {
    text-align: center;
}

video {
    height: 403px;
    width: 40%;
}
.introduction{
    text-align: right;
    padding-right: 30%;
}

p {
    color: #646464;
    font-family: Yekan Bakh;
    font-size: 16px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0em;
}
</style>