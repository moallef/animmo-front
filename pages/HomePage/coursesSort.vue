<template>
    <div class="container">
        <div v-if="filteredCourses.length > 0" style="display: inline-flex; margin-top: 35px;">
            <div v-for="(course, index) in filteredCourses" :key="index" class="coursesSort">
                <img :src="`https://animmo.ir/${course.imgSrc}`" alt="">
                <div class="textContainer">
                    <div class="courseText">
                        <div class="courseTitle">
                            <h3 class="courseName">{{ course.course }}</h3>
                            <p class="courseTeacher">{{ course.teacher }}</p>
                        </div>
                        <div class="aboutCourse">
                            <div class="courseDetails">
                                <p>({{ course.season }}) تعداد دوره‌ها </p>
                            </div>
                        </div>
                        <div>
                            <nuxt-link to="/Animate">
                                <button class="showMore">مشاهده دوره ها</button>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <p>No courses available for this category</p>
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
            console.log(this.slugName);
            return this.courses.filter(course => course.category === this.slugName);
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
    src: url('/assets/Fonts/Yekan Bakh Regular/Yekan Bakh Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
img {
    width: 90%;
    margin-inline: 5%;
    height: 120px;
    border-radius: 16px;
    margin-top: -60px;
}

.coursesSort {
    background: #F4F4F4;
    border-radius: 24px;
    height: 272px;
    width: 302px;
    align-items: center;
    box-sizing: border-box;
    justify-content: flex-start; 
    margin-left: 20px;
    margin-bottom: 90px;
}
.textContainer {
    padding-top: 30px;
    width: 100%;
}

.courseTitle {
    padding-right: 7%;
    text-align: right;
    height: 0px;
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
    margin-left: 9%;
    margin-bottom: 10px;
}

.courseName {
    margin-bottom: 10px;
    width: 50%;
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
    margin-top: 60px;
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

@media (max-width : 550px) {
    .coursesSort {
        width: 200px;
        font-size: 12px;
    }

    .courseDetails {
        font-size: 11px;
    }

    .showMore {
        margin-right: 40%;
    }
}

@media (max-width : 510px) {
    .coursesSort {
        width: 140px;
        font-size: 12px;
    }

    .showMore {
        margin-right: 20%;
        width: 100px;
        font-size: 12px;
        margin-top: 80px;
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