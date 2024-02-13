<template>
    <div class="courses">
        <div class="theCourse">
            <img class="courseImage" src="../../assets/images/Rectangle 106.png" alt="">
            <div class="details">
                <div class="productName">
                    <p class="title">{{ title }}</p>
                    <p class="teacher">{{ techersName }}</p>
                </div>
                <div class="productTime">
                    <p class="seasonsCount">
                        <img src="../../assets/icons/clock-3-16.png" alt="">
                        فصل
                        {{ SeasonsCount }}
                        <img src="" alt="">
                    </p>
                    <p class="courseDurationInHours">
                        <img src="../../assets/icons/pngaaa.com-630491.png" alt="">
                        ساعت
                        {{ courseDurationInHours }}
                        <img src="" alt="">
                    </p>
                </div>
                <div class="courseFee">
                    <p class="primaryFee">
                        {{ primaryFee }}
                        هزار تومان
                    </p>
                    <p class="discountedFee">
                        {{ DiscountedFee }}
                        هزار تومان
                    </p>
                </div>
                <div class="btnHolder">
                    <nuxt-link to="./CourseDetails">
                        <button class="moreBtn">
                            مشاهده دوره
                        </button>
                    </nuxt-link>
                    <nuxt-link to="">
                        <button class="addToCards">
                            افزودن به سبد خرید
                        </button>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "آموزش نرم افزار مایا",
            techersName: "مهدی مؤلف",
            SeasonsCount: "۳",
            courseDurationInHours: "۹",
            primaryFee: "۱٬۳۰۰٬۰۰۰",
            DiscountedFee: "۹۸۰.۰۰۰"
        }
    }
}
</script>

<style scoped>
@font-face {
    font-family: 'Yekan Bakh';
    src: url('~/assets/Fonts/Yekan Bakh Regular/Yekan Bakh Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
.courses {
    display: block;
    gap: 28px;
    padding-inline: 5%;
    background: #F9F9F9;
    border-radius: 24px;
    margin-inline: 2%;
    box-sizing: border-box;
}

.courseImage {
    border-radius: 10px;
    width: 90%;
}

.details {
    text-align: right;
}

.title {
    font-size: 19px;
    font-weight: 800;
    line-height: 15px;
    letter-spacing: -0.04em;
    margin-top: 10px;
    margin-right: 2%;
}

.teacher {
    margin-top: 10px;
    margin-right: 2%;
}

.btnHolder {
    margin: auto;
    margin-top: 15px;
}

.moreBtn {
    width: 45%;
    height: 40px;
    border-radius: 50px;
    gap: 8px;
    color: white;
    border: 2px solid #9D87CE;
    font-size: 14px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: -0.07em;
    margin-right: 5%;
    margin-bottom: 20px;
}

.addToCards {
    background: #8569C2;
    height: 40px;
    width: 45%;
    border-radius: 50px;
    border: none;
    color: white;
    font-size: 14px;
    margin-right: 2%;
}

.productTime {
    color: #979797;
    margin-top: -10px;
}

.courseDurationInHours {
    margin-right: 55%;
    margin-top: -20px;
}

.seasonsCount {
    margin-top: 20px;
    margin-right: 2%;
}

.courseDurationInHours img {
    width: 17px;
    opacity: 0.67;
}

.courseFee {
    margin-top: -15px;
}

.primaryFee {
    text-decoration: line-through;
    color: #646464;
    margin-top: 20px;
    margin-right: 2%;
}

.discountedFee {
    color: #C8102E;
    margin-right: 55%;
    width: 50%;
    margin-top: -20px;
}

@media (max-width : 940px) {
    .courseFee {
        width: 100%;
    }
    .discountedFee {
        margin-right: 3%;
        margin-top: 10px;
        width: 100%;
    }

    .primaryFee {
        margin-right: 3%;
        margin-top: 30px;
        width: 100%;
    }
}

@media (max-width : 770px) {
    .addToCards {
        width: 95%;
        margin: auto;
        margin-top: 10px;
    }

    .moreBtn {
        width: 95%;
        margin: auto;
    }
}
</style>