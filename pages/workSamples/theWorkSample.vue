<template>
    <div>
        <div class="container">
            <img class="sampleImg" src="../../assets/images/Rectangle 119.png" alt="Product Image">
            <div class="content">
                <p class="student"> {{ student }} </p>
                <p class="courseStudent"> {{ courseStudent }} </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FrontendTheWorkSample',

    data() {
        return {
            student: "زهرا عرفانیان ",
            courseStudent: "هنرجوی دوره بن گذاری"
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
    background: #F4F4F4;
    height: 277px;
    margin-right: 5%;
    border-radius: 15px;
    text-align: center;
    margin-top: 50px;
    margin-inline: 20px;
}

img {
    width: 90%;
    margin-top: 20px;
    height: 185px;
}

.content {
    text-align: right;
    margin-top: 10px;
    margin-right: 7.5%;
    margin-bottom: -25px;
}

.student {
    font-family: Yekan Bakh;
    font-size: 14px;
    font-weight: 500;
    line-height: 8px;
    letter-spacing: 0em;
    color: #979797;
    margin-top: 20px;
}

.courseStudent {
    font-family: Yekan Bakh;
    font-size: 18px;
    font-weight: 600;
    line-height: 8px;
    letter-spacing: 0em;
    color: #252565;
    margin-top: 15px;
}

button {
    color: #B6A5DA;
    border: solid 2px #B6A5DA ;
    width: 30%;
    height: 42px;
    top: 201px;
    left: 24px;
    padding: 2px, 10px, 2px, 10px;
    border-radius: 28px;
    gap: 10px;
    margin-right: 60%;
    margin-top: -10px;
}
</style>