<template>
    <div class="theBlog">
        <div class="line"></div>
        <div class="container">
            <nuxt-link to="/theBlog">
                <img class="blogCover" src="../../assets/images/image 8.png" alt="">
                <div class="description">
                    <p class="title">
                        {{ title }}
                    </p>
                    <p class="annonation">
                        {{ annonation }}
                    </p>
                </div>
                <div class="address">
                    <p class="author">
                        {{ author }}
                    </p>
                    <p class="date">
                        {{ date }}
                    </p>
                </div>
            </nuxt-link>
            <div class="save">
                <button @click="chnageIcon" >
                    <img :src="iconBoolian ? savedIcon : unsavedIcon" alt="ذخیره">
                </button>
            </div>
    </div>
</div>
</template>

<script>
import unsavedIcon from "../../assets/icons/saveIcon.png"
import savedIcon from "../../assets/icons/savedIcon.png"

export default {
    name: 'FrontendTheBlog',

    data() {
        return {
            iconBoolian : false,
            title: " همه چیز درباره تاریخ صنعت انیمیشن سازی در ژاپن ",
            annonation: " انواع انیمیشن از دیرباز با دنیای شگفت‌انگیز و فانتزی خود برای تحقق بخشیدن به رؤیاهای ... ",
            author: "نوشته شده توسط",
            date: "فوریه 22, 2023 ",
        };
    },

    mounted() {

    },

    methods: {
        chnageIcon(){
            this.iconBoolian = !this.iconBoolian 
            console.log(this.iconBoolian);
        }
    },
};
</script>

<style lang="scss" scoped>
.theBlog{
    width: 48%;
    margin-top: 50px;
    margin-left: 1%;
}

a {
    color: black;
}

.line {
    border: 1px solid #C9C9C9;
    margin-bottom: 20px;
    width: 95%;
}

.blogCover {
    width: 30%;
}

.description {
    margin-right: 40%;
    margin-top: -190px;
}

.title {
    font-family: Yekan Bakh;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
}

.annonation {
    font-family: Yekan Bakh;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: #979797;
    margin-top: 10px;

}

.address {
    margin-right: 40%;
    margin-top: 90px;
}

.author {
    font-family: Yekan Bakh;
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0em;
    color: #979797;
}

.date {
    font-family: Yekan Bakh;
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0em;
    color: #C9C9C9;
    margin-top: 5px;
}

.save {
    margin-right: 90%;
    margin-top: -30px;
}

button {
    background: none;
    border: none;
}
</style>