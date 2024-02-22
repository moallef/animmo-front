<template>
    <div class="container">
        <div class="forContainer" v-if="filteredCourses.length > 0">
            <div v-for="(course, index) in filteredCourses.slice(0, 6)" :key="index" class="coursesSort">
                <img :src="`https://animmo.ir/${course.image}`" alt="">
                <div class="textContainer">
                    <div class="courseText">
                        <div class="detailContainer">
                            <div class="courseTitle">
                                <h3 class="courseName">{{ course.subcategory }}</h3>
                                <p class="courseTeacher">{{ course.category }}</p>
                            </div>
                            <div class="aboutCourse">
                                <div class="courseDetails">
                                    <div class="rating">
                                        <span class="star" v-for="star in 5" :key="star" :class="{ 'filled': star <= filledStars }">&#9733;</span>
                                    </div>
                                    <p>({{ course.count_course }}) تعداد دوره‌ها </p>
                                </div>
                            </div>
                        </div>
                        <div class="btnHolder">
                            <nuxt-link to="/Animate">
                                <button class="showMore">مشاهده دوره ها</button>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { useCourseStore } from '~/store/courseSubcategoryStore.js';

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
    margin-top: -20px;
}
.courseText{
    display: flex;
    flex-direction: column;
}
.forContainer{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 35px;
}
.coursesSort {
    background: #F4F4F4;
    border-radius: 24px;
    height: 351px;
    width: 302px;
    margin-left: 20px;
    margin-bottom: 90px;
}
.textContainer {
    padding-top: 30px;
    width: 100%;
}
.detailContainer{
    display: flex;
    width: 90%;
    flex-direction: row;
    justify-content: space-between;
    height: 80px;
}
.courseTitle {
    padding-right: 7%;
    width: 50%;
    text-align: right;
    margin-bottom: 5px;
}

.courseDetails {
    text-align: left;
    color: #979797;
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    margin-bottom: 10px;
}
.rating{
    margin-bottom: 10px;
}
a {
    font-family: 'Yekan Bakh', sans-serif;
    color: #F4F4F4;
}

.showMore {
    background: #8569C2;
    color: #F4F4F4;
    border: none;
    padding: 10px 16px 10px 16px;
    width: 125px;
    border-radius: 35px;
    margin-right: 50%;
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
}
</style>