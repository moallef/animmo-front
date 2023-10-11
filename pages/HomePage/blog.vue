<template>
    <div class="blogComponent">
        <div class="title">
            <p>وبلاگ</p>
        </div>
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
                    <button class="readMore">
                        <img src="../../assets/icons/blogLeftArrow.png" alt="">

                        خواندن
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.blogComponent {
    position: absolute;
    top: 3400px;
    text-align: right;
    width: 100%;
}

.title {
    width: 100%;
}

.title p {
    position: relative;
    font-size: 40px;
    font-weight: 600;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: right;
    right: 6%;
}

.theBlog {
    position: relative;
    width: 25%;
    float: right;
    top: 40px;
    margin: 10px 8%;
}

.blogPoster {
    width: 15%;
    height: 193px;
    border-radius: 8px;
    left: 54%;
    position: relative;
    text-align: right;
}

.blogTxt {
    position: relative;
    right: 60%;
    top: -180px;
}


.theBlogTitle {
    font-family: Yekan Bakh;
    font-size: 25px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: right;
    margin-bottom: 20px;
}

.theBlogDescription {
    font-family: Yekan Bakh;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.02em;
    text-align: right;
    color: #979797;

}

.readMore {
    position: relative;
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
    color: #8569C2;
    background: none;
    border-radius: 49px;
    border: 2px solid #8569C2;
    top: 20px;
    height: 40px;
    width: 25%;
}
.readMore:hover{
    background: #F4F4F4;
}
</style>