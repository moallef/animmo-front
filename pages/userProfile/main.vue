<template>
    <div>
        <div class="container">
            <div class="head">
                <div class="title">
                    دوره های خریداری شده من
                </div>
                <div class="search">
                    <input id="searchInput" type="text" placeholder="جستجو دوره">
                    <button id="searchBtn">
                        جستجو
                    </button>
                </div>
                <div class="lines">
                    <div class="overLine"></div>
                    <div class="line"></div>
                </div>
            </div>
            <div class="courses" >
                <courses-component/>
            </div>
        </div>
    </div>
</template>

<script>
import courses from './courses.vue'

export default {
    name: 'FrontendMain',

    data() {
        return {

        };
    },
    components:{
        "courses-component" : courses,
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
@font-face {
    font-family: 'PeydaWeb';
    src: url('~/assets/Fonts/PeydaWeb/PeydaWeb.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
.container {
    width: 100%;
    background: #F9F9F9;
    height: 720px;
    border-radius: 16px;
}

.head {
    padding-top: 30px;
}

.title {
    font-family: 'PeydaWeb', sans-serif;

    font-size: 24px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0em;
    height: 0px;
    margin-right: 5%;
}

.search {
    margin-right: 65%;
}

#searchInput {
    width: 174px;
    height: 32px;
    padding: 10px;
    border-radius: 16px;
    border: none;
    background: #E9E9E9;
    outline: none;
    margin-left: 5px;
}

#searchInput:focus {
    border: solid 1px #8569C2;
}

#searchBtn {
    width: 99px;
    height: 32px;
    background: #8569C2;
    color: white;
    padding: 6px 22px 6px 22px;
    border-radius: 16px;
    border: none;
    font-family: 'PeydaWeb', sans-serif;

    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
}

.lines {
    width: 90%;
    margin-right: 5%;
    margin-top: 20px;
}

.line {
    border: 1px;
    border: 1px solid #EDEDED;

}

.overLine {
    width: 28%;
    height: 2px;
    background: #2F3BBD;

}
.courses{
    display: flex;
    width: 90%;
    margin-inline: 5%;
    margin-top: 30px;
}
</style>