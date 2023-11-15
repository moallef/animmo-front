<template>
    <div class="theBlog">
        <div class="line"></div>
        <div class="container">
            <img class="blogCover" src="../../assets/images/image 8.png" alt="">
            <div class="description">
                <nuxt-link to="">
                    <p class="title">
                        {{ title }}
                    </p>        
                </nuxt-link>
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
                <div class="save">
                    <button>
                        <img src="../../assets/icons/Property 1=Default.png" alt="">
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FrontendTheBlog',

    data() {
        return {
            title: " همه چیز درباره تاریخ صنعت انیمیشن سازی در ژاپن ",
            annonation: " انواع انیمیشن از دیرباز با دنیای شگفت‌انگیز و فانتزی خود برای تحقق بخشیدن به رؤیاهای ... ",
            author: "نوشته شده توسط",
            date: "فوریه 22, 2023 ",
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>

.line {
    border: 1px solid #C9C9C9;
    margin-bottom: 20px;
    width: 95%;
}
.blogCover{
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
    margin-right: 85%;
    margin-top: -30px;
}
button{
    background: none;
    border: none;
}
</style>