<template>
    <div>
        <div class="coursesSort">
            <img src="../../assets/images/Rectangle 105.png" alt="">
            <div class="coursesText">
                <div class="courseTitle">
                    <h3 class="courseName">طراحی کاراکتر سه بعدی</h3>
                    <p class="courseTaecher">مهدی مولف</p>
                </div>
                <div class="courseDetails">
                    <p>۳ فصل</p>
                    <p>۹ ساعت </p>
                </div>
                <div class="courseFee">
                    <p class="baseFee">۱٬۳۰۰٬۰۰۰ هزار تومان </p>
                    <p class="saleFee">۹۸۰.۰۰۰ هزار تومان</p>
                </div>
                <div>
                    <button class="addToCart">
                        افزودن به سبد خرید
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
img {
    position: relative;
    width: 90%;
    z-index: 1;
    border-radius: 16px;
}
    .coursesSort {
    position: absolute;
    width:32%;
    top: 0px;
    left: 2%;
    height: 50px;
    text-align: center;
}

.coursesText {
    position: relative;
    width: 100%;
    height: 423px;
    bottom: 200px;
    left: 1px;
    border-radius: 24px;
    background: #F4F4F4;
}

.courseTitle {
    padding-right: 7%;
    position: relative;
    top: 180px;
    text-align: right;
}

.courseDetails {
    padding-right: 7%;
    position: relative;
    top: 180px;
    text-align: right;
}

.courseFee {
    padding-right: 7%;
    position: relative;
    top: 180px;
    text-align: right;
}

.addToCart {
    position: relative;
    top: 190px;
    width: 100%;
    height: 56px;
    border: none;
    border-radius: 0 0 24px 24px;
    background: #8569C2;
    color: white;
    font-size: 24px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: -0.07em;
}
.baseFee {
    color: red;
    text-decoration: line-through;
}
</style>