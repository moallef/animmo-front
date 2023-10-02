<template>
    <div>
        <div class="classification">
            <div>
                <p id="classifications">
                    دسته بندی ها
                </p>
            </div>
            <div>
                <div>
                    <courses-Sort/>
                </div>
                <div class="coursesSort2">
                    <img src="../assets/images/Rectangle 191.png" alt="">
                    <div class="coursesText">
                        <div class="courseTitle">
                            <h3 lass="courseName">آموزش انیمیت دو بعدی</h3>
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
                <div class="coursesSort3">
                    <img src="../assets/images/Rectangle 192.png" alt="">
                    <div class="coursesText">
                        <div class="courseTitle">
                            <h3 lass="courseName">صفر تا صد طراحی استوری برد</h3>
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
        </div>
    </div>
    <div>
        <button class="moreBtn">
            <img src="../assets/icons/Vector (1).png" alt="">
            مشاهده همه
        </button>
    </div>
</template>

<script>
import coursesSort from './coursesSort.vue'

export default{
    components : {
        "courses-Sort" : coursesSort
    }
}
</script>

<style scoped>
#classifications {
    width: 145px;
    height: 12px;
    font-size: 24px;
    font-weight: 600;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: center;
    position: absolute;
    right: 45%;
    top: -100px;
}

.classification {
    list-style: none;
    position: relative;
    width: auto;
    width: 1282px;
    height: 442px;
    top: 220px;
    position: relative;
    width: 100%;
    min-width: 315px;
}

.classification img {
    position: absolute;

}


.coursesSort2 {
    position: absolute;
    width: 20%;
    margin-left: 36%;
    height: 50px;
    text-align: center;
}

.coursesSort3 {
    position: absolute;
    top: 0px;
    right: 10%;
    height: 50px;
    width: 20%;
    text-align: center;
}

.coursesText {
    width: 409px;
    height: 423px;
    top: 19px;
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
.moreBtn {
    color: white;
    width: 9%;
    height: 49px;
    top: 350px;
    left: 47%;
    border-radius: 49px;
    background: #8569C2;
    border: none;
    position: relative;
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
}
</style>