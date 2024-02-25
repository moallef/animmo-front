<template>
    <div class="container">
        <div class="forContainer" v-if="filteredCourses.length > 0">
            <div v-for="(course, index) in filteredCourses.slice(0, 6)" :key="index" class="coursesSort">
                <img :src="`https://animmo.ir/api/${course.imgSrc}`" alt="">
                <div class="textContainer">
                    <div class="courseText">
                        <div class="detailContainer">
                            <div class="courseTitle">
                                <h3 class="courseName">{{ course.course }}</h3>
                                <p class="courseTeacher">{{ course.teacher }}</p>
                            </div>
                            <div class="courseTime">
                                <span class="seasons">
                                    {{ course.season }} فصل
                                </span>
                                <span class="hour">
                                    {{ course.houres }} ساعت 
                                </span>
                            </div>
                            <div class="fee">
                                <span class="price">
                                    {{ course.price }} هزار تومان 
                                </span>
                                <span class="discountFee"> 
                                    {{ course.price }} هزار تومان
                                </span>
                            </div>
                            <div class="btnHolder">
                                <nuxt-link to="/Animate">
                                    <button class="addToStore">افزودن به سبد خرید</button>
                                </nuxt-link>
                                <nuxt-link to="/CourseDetails">
                                    <button class="showMore">مشاهده دوره </button>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { useCourseStore } from '~/store/courseStore.js';

export default {
    data() {
        return {
            courses: [],
            categories: [],
            slugName: '',
        };
    },
    computed: {
        filteredCourses() {
            const categoryStore = useCourseStore();
            this.slugName = categoryStore.categorySelected;
            if (this.slugName) {
                return this.courses.filter(course => course.category === this.slugName);
            }
            else {
                return this.courses.filter(course => course.category === '2d');
            }
        },
    },
    async created() {
        const store = useCourseStore();
        this.courses = await store.fetchCourse();
        this.slugName = '2d';
    },
};
</script>
  
<style scoped>
@font-face {
    font-family: 'Yekan Bakh';
    src: url('../assets/Fonts/YekanBakhRegular/YekanBakh-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

img {
    width: 90%;
    margin-inline: 5%;
    height: 209px;
    border-radius: 16px;
    margin-block: 15px;
}

.courseText {
    display: flex;
    flex-direction: column;
}

.forContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 35px;
}

.coursesSort {
    background: #F4F4F4;
    border-radius: 24px;
    height: 434px;
    width: 25%;
    margin-left: 20px;
    margin-bottom: 90px;
}

.courseTime,
.fee {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    margin-inline: 5%;
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: -0.04em;
    color: #7D7D7D;
}

.fee {
    font-family: 'Yekan Bakh', sans-serif;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: -0.07em;
    color: #C8102E;
    width: 100%;
}

.price {
    text-decoration: line-through;
    color: #7D7D7D;
}

.detailContainer {
    display: flex;
    width: 90%;
    flex-direction: column;
    justify-content: space-between;
    height: 80px;
}

.btnHolder {
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
    margin-inline: 5%;
}

.courseTitle {
    padding-right: 7%;
    width: 100%;
    text-align: right;
    margin-bottom: 5px;
}

a {
    font-family: 'Yekan Bakh', sans-serif;
    color: #F4F4F4;
}

.addToStore {
    background: #8569C2;
    color: #F4F4F4;
    border: none;
    padding: 10px 16px 10px 16px;
    width: 125px;
    border-radius: 35px;
    margin-left: 20px;
}

.showMore {
    border: 2px solid #9D87CE;
    color: #9D87CE;
    width: 125px;
    padding: 10px 16px 10px 16px;
    border-radius: 35px;
}

.showMore:hover {
    background: #8569C2;
    color: #F4F4F4;
    border: none;
}

@media (max-width : 1054px) {
    .coursesSort {
        width: 270px;
    }
}

@media (max-width : 850px) {
    .coursesSort {
        width: 230px;
    }

    .showMore {
        margin-right: 40%;
    }
}

@media (max-width : 650px) {
    .coursesSort {
        width: 100%;
        font-size: 12px;
    }

    .showMore {
        margin-right: 65%;
    }
}

@media (max-width : 550px) {

    .courseDetails {
        font-size: 11px;
    }


}

@media (max-width : 510px) {

    .showMore {
        margin-right: 5%;
        width: 90%;
        font-size: 12px;
        margin-top: 20px;
    }

    img {
        margin-bottom: -90px;
    }

    .courseName {
        font-size: 20px;
    }

    .textContainer {
        padding-top: 120px;
        width: 100%;
    }
}</style>