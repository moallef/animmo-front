<template>
    <div>
        <div class="coursesSort">
            <img src="../../assets/images/Rectangle 105.png" alt="">
            <div class="textContainer">
                <div class="courseText">

                    <div class="courseTitle">
                        <h3 class="courseName">آموزش انیمیت </h3>
                        <p class="courseTaecher">مهدی مولف</p>
                    </div>
                    <div class="aboutCourse">
                        <div class="rating">
                            <img src="../../assets/icons/emptyStar.png" alt="">
                            <img src="../../assets/icons/fullStar.png" alt="">
                            <img src="../../assets/icons/fullStar.png" alt="">
                            <img src="../../assets/icons/fullStar.png" alt="">
                            <img src="../../assets/icons/fullStar.png" alt="">
                        </div>
                        <div class="courseDetails">
                            <p>({{3}}) تعداد دوره‌ها </p>
                        </div>
                    </div>


                    <div>
                        <nuxt-link to="/Animate">
                        <button class="showMore">
                                مشاهده دوره ها
                            </button>
                        </nuxt-link>
                        </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{

    },
}

</script>

<style scoped>

img {
    width: 80%;
    z-index: 1;
    border-radius: 16px;
    margin-bottom: -110px;
}

.coursesSort {
    width: 18%;
    text-align: center;
    margin-right: 3%;
    margin-top: 40px;
}

.textContainer {
    width: 100%;
    height: 272px;
    border-radius: 24px;
    background: #F4F4F4;
    padding-top: 140px;
}

.courseTitle {
    padding-right: 7%;
    text-align: right;
}

.courseDetails {
    text-align: left;
    color: #979797;
    font-family: IRANYekan;
    font-size: 16px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    margin-left: 9%;
    margin-top: -35px;
    margin-bottom: 30px;
}

.courseName {
    margin-bottom: 10px;
}

.rating {
    width: 40%;
    position: relative;
    top: -155px;
    margin-right: 55%
}

.rating img {
    width: 17%;
}
a{
    color: #F4F4F4;
}
.showMore {
    background: #8569C2;
    color: #F4F4F4;
    border: none;
    padding: 10px 16px 10px 16px;
    border-radius: 35px;
    margin-right: 45%;
}
@media (max-width : 1054px) {
    .coursesSort{
        width: 25%;
    }
}

@media (max-width : 850px){
    .coursesSort{
        width: 35%;
    }
    .showMore{
        margin-right: 40%;
    }
}
@media (max-width : 550px){
    .coursesSort{
        width: 40%;
        font-size: 12px;
    }
    .courseDetails{
        font-size: 11px;
    }
    .showMore{
        margin-right: 40%;
    }
}
@media (max-width : 550px){
    .showMore{
        margin-right: 20%;
        width: 65%;
        font-size: 12px;
        margin-top: -20px;
    }
    img {
        margin-bottom: -90px;
    }
    .rating {
        top: -75px;
    }
    .courseDetails{
        margin-top: 0px;
        margin-left: 55%;
    }
    .courseName {
    margin-bottom: 10px;
    margin-top: -20px;
}
.courseName{
    font-size: 20px;
}
}

</style>