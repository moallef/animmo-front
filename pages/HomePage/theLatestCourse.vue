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
                    <p class="SeasonsCount">
                        فصل
                        {{ SeasonsCount }}
                        <img src="" alt="">
                    </p>
                    <p class="courseDurationInHours">
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
                    <p class="DiscountedFee">
                        {{ DiscountedFee }} 
                        هزار تومان
                    </p>
                </div>
                <button class="addToCards">
                    <nuxt-link to="">
                        افزودن به سبد خرید
                    </nuxt-link>
                </button>
                <button class="moreBtn">
                    <nuxt-link to="">
                        مشاهده دوره
                    </nuxt-link>
                </button>
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
}

.moreBtn {
    width: 15%;
    height: 42px;
    border-radius: 50px;
    gap: 8px;
    color: #9D87CE;
    border: 2px solid #9D87CE;
    font-size: 18px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: -0.07em;
}

.addToCards {
    background: #8569C2;
    height: 42px;
    width: 20%;
    border-radius: 50px;
    border: none;
    color: white;
    font-size: 18px;
}

.primaryFee {
    text-decoration: line-through;
    color: red;
}
</style>