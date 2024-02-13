<template>
    <div>
        <div class="coursesSort">
            <img :src="`https://animmo.ir/${course.imgSrc}`" alt="">
            <div class="textContainer">
                <div class="courseText">
                    <div class="courseTitle">
                        <h3 class="courseName">{{ course.course }}</h3>
                        <p class="courseTeacher"> {{ course.teacher }}</p>
                    </div>
                    <div class="aboutCourse">
                        <div class="courseDetails">
                            <p>({{ course.season }}) تعداد دوره‌ها </p>
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
import { useCourseStore } from '~/store/courseStore.js';

export default {
    props: {
        index: Number,
    },
    data() {
        return {
            course: {},
        };
    },
    async beforeCreate() {
        const store = useCourseStore();
        const courses = await store.fetchCourse();
        this.course = courses[this.index] || {};
    },
};
</script>
  
<style scoped>
@font-face {
    font-family: 'Yekan Bakh';
    src: url('~/assets/Fonts/Yekan Bakh Regular/Yekan Bakh Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
img {
    width: 90%;
    height: 120px;
    border-radius: 16px;
    margin-top: -60px;
}

.coursesSort {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F4F4F4;
    border-radius: 24px;
    height: 272px;
    width: 302px;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    margin-left: 20px;
}

.textContainer {
    padding-top: 30px;
    width: 100%;
}

.courseTitle {
    padding-right: 7%;
    text-align: right;
    height: 0px;
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