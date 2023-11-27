<template>
    <div>
        <div class="blogs">
            <div class="theBlog">
                <div class="blogPoster">
                    <img src="../../assets/images/image 8.png" alt="">
                </div>
                <div class="blogTxt">
                    <div class="theBlogTitle">
                        <p>
                            همه چیز درباره
                            تاریخ صنعت انیمیشن سازی در ژاپن
                        </p>
                    </div>
                    <div class="theBlogDescription">
                        <p>
                            انواع انیمیشن از دیرباز با دنیای شگفت‌انگیز و
                            فانتزی خود برای تحقق بخشیدن به رؤیاهای ...
                        </p>
                    </div>
                    <nuxt-link to="/theBlog">
                        <button class="readMore">
                            خواندن
                            <img src="../../assets/icons/blogLeftArrow.png" alt="">
                        </button>
                    </nuxt-link>
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

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style scoped>
.theBlog {
    margin: 10px 8%;
}

.blogPoster img {
    width: 35%;
    height: 193px;
    border-radius: 8px;

}

.blogTxt {
    margin-right: 40%;
    margin-top: -193px;
    width: 60%;
}

.theBlogTitle {
    font-family: Yekan Bakh;
    font-size: 25px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;

    margin-bottom: 20px;
    margin-top: 10px;
}

.theBlogDescription {
    font-family: Yekan Bakh;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: #979797;

}

.readMore {
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
    color: #8569C2;
    background: none;
    border-radius: 49px;
    border: 2px solid #8569C2;
    height: 40px;
    width: 20%;
    margin-top: 20px;
}

.readMore:hover {
    background: #F4F4F4;
}

@media (max-width : 1300px) {
    .readMore {
        width: 30%;
    }
}
@media (max-width : 780px) {
    .readMore {
        height: 30px;
        width: 50%;
        margin-right: 50%;
    }

    .theBlogTitle {
        font-size: 16px;
    }
    .theBlogDescription {
        font-size: 11px;
    }
}
</style>