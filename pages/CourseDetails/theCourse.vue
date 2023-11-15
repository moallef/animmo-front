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
            </div>
        </div>
        <div class="btnHolder">
            <button class="addToCards">
                <nuxt-link to="">
                    افزودن به سبد خرید
                </nuxt-link>
            </button>
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
.teacher{
    margin-top: 10px;
    margin-right: 2%;
}
.btnHolder{
    margin-top: 25px;
    width: 112%;
    margin-right: -6%;
}
.addToCards {
    background: #8569C2;
    height: 40px;
    width: 100%;
    border-radius: 0px 0px 24px 24px;
    border: none;
    color: white;
    font-size: 14px;
}
.productTime {
    color: #979797;
    margin-top: -10px;
}
.courseDurationInHours{
    margin-right: 55%;
    margin-top: -20px;
}
.seasonsCount{
    margin-top: 20px;
    margin-right: 2%;
}
.courseDurationInHours img{
    width: 17px;
    opacity: 0.67;
}
.courseFee{
    margin-top: -15px;
}
.primaryFee {
    text-decoration: line-through;
    color: #646464;
    margin-top: 20px;
    margin-right: 2%;
}
.discountedFee{
    color:#C8102E;
    margin-right: 55%;
    width: 50%;
    margin-top: -20px;
}
</style>