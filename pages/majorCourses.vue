<template>
    <div class="majorCourses">
        <div>
            <p class="title">دوره های جامع انیمو</p>
        </div>
        <div>
            <button class="leftArrow">
                <img src="../assets/icons/leftScrol.png" alt="">
            </button>
            <button class="righArrow">
                <img src="../assets/icons/rightScrol.png" alt="">
            </button>
        </div>
        <div class="courses">
            <div class="theCourse">
                <img src="../assets/images/Rectangle 106.png" alt="">
                <div class="details">
                    <div class="productName">
                        <p>آموزش جامع انیمیت</p>
                        <p>مهدی مؤلف</p>
                    </div>
                    <div class="productTime">
                        <p>
                            ۳ فصل
                            <img src="" alt="">
                        </p>
                        <p>
                            ۹ ساعت
                            <img src="" alt="">
                        </p>
                    </div>
                    <div class="borderLine">

                    </div>
                    <button class="moreBtn">
                        مشاهده 
                        <img src="../assets/icons/arrow-25-16.png" alt="">
                    </button>
                </div>
            </div>
        </div>
        <div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.majorCourses {
    position: relative;
    width: 1440px;
    height: 350px;
    top: 1080px;
    width: 100%;
    text-align: center;
}

.title {
    font-size: 24px;
    font-weight: 600;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: center;
}

.courses {
    float: left;
    width: Fixed (1, 292px);
    height: Hug (364px);
    top: 2427px;
    left: 80px;
    gap: 28px;
    padding-inline: 8%;
}

.moreBtn {
    width: 124px;
    height: 47px;
    left: 174px;
    padding: 4px, 8px, 4px, 8px;
    border-radius: 22px;
    gap: 8px;
    background: #8569C2;
    color: white;
    border: none;
    font-size: 100%;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: -0.07em;
}

.leftArrow {
    position: relative;
    width: 12px;
    height: 24.49px;
    top: 190px;
    right: 640px;
    border: none;
    background: none;
}

.righArrow {
    position: relative;
    width: 12px;
    height: 24.49px;
    top: 190px;
    left: 640px;
    border: none;
    background: none;
}

.courses p {
    text-align: right;
}

.borderLine {
    width: 300px;
    top: 400px;
    position: absolute;
    border-top: 2px solid rgb(180, 144, 201);
}</style>