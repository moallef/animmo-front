<template>
    <div>
        <div class="coursesSort">
            <img src="../../assets/images/Rectangle 105.png" alt="">
            <div class="coursesText">
                <div class="courseTitle">
                    <h3 class="courseName">آموزش انیمیت </h3>
                    <p class="courseTaecher">مهدی مولف</p>
                </div>
                <div class="aboutCourse">
                    <div class="courseDetails">
                        <p>({{}}) تعداد دوره‌ها </p>
                    </div>
                </div>
                <div class="rating">
                    <img src="../../assets/icons/fullStar.png" alt="">
                    <img src="../../assets/icons/fullStar.png" alt="">
                    <img src="../../assets/icons/fullStar.png" alt="">
                    <img src="../../assets/icons/fullStar.png" alt="">
                    <img src="../../assets/icons/emptyStar.png" alt="">
                </div>
                <!-- <div class="courseFee">
                    <p class="baseFee">۱٬۳۰۰٬۰۰۰ هزار تومان </p>
                    <p class="saleFee">۹۸۰.۰۰۰ هزار تومان</p>
                </div> -->
                <!-- <div>
                    <button class="addToCart">
                        افزودن به سبد خرید
                    </button>
                </div> -->
                <div>
                    <button class="showMore">
                        مشاهده دوره ها
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
    width: 80%;
    z-index: 1;
    border-radius: 16px;
    top: -70px;
}

.coursesSort {
    position: absolute;
    width: 22%;
    top: 50px;
    left: 2%;
    text-align: center;
    height: fit-content;
}

.coursesText {
    position: relative;
    width: 100%;
    height: 272px;
    bottom: 200px;
    left: 1px;
    border-radius: 24px;
    background: #F4F4F4;
}

.courseTitle {
    padding-right: 7%;
    position: relative;
    top: 150px;
    text-align: right;
}

.courseDetails {
    position: relative;
    top: 130px;
    text-align: left;
    left: 15%;
    color: #979797;
    font-family: IRANYekan;
    font-size: 16px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
}

.courseFee {
    padding-right: 7%;
    position: relative;
    top: 220px;
    text-align: right;
}

.addToCart {
    position: relative;
    top: 250px;
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

.courseName {
    margin-bottom: 10px;
}

.rating {
    position: relative;
    top: 150px;
}

.rating img {
    width: 6%;
    position: relative;
    right: 25%;
}

.showMore {
    background: #8569C2;
    position: relative;
    top: 130px;
    color: #F4F4F4;
    border: none;
    right: 20%;
    padding: 10px 16px 10px 16px;
    border-radius: 35px;
}
</style>