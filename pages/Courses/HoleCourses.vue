<template>
    <div class="container">
        <div class="forContainer" v-if="courses.length > 0">
            <div v-for="(course, index) in courses" :key="index" class="coursesSort">
                <img :src="`https://animmo.ir/${course.image}`" alt="">
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
                                <span class="duration">
                                    {{ course.duration }} ساعت
                                </span>
                            </div>
                            <div class="fee" v-if="course.off_price != course.price">
                                <span class="price">
                                    {{ course.price }} تومان
                                </span>
                                <span class="discountFee">
                                    {{ course.off_price }} تومان
                                </span>
                            </div>
                            <div class="fee" v-else>
                                <span class="discountFee">
                                    {{ course.price }} تومان
                                </span>
                            </div>
                            <div class="btnHolder">
                                <nuxt-link >
                                    <button
                                        @click="addToStore(course.id, course.course, course.price, course.image, course.off_price, course.teacher)"
                                        class="addToStore">افزودن به سبد خرید</button>
                                </nuxt-link>
                                <nuxt-link :to="`/CourseDetails/${slug}`">
                                    <button class="showMore" @click="sendSlugToStore(course.slug)">مشاهده دوره </button>
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
import { useBaskteStore } from '~/store/basketStore';
import Swal from "sweetalert2";

export default {
    data() {
        return {
            courses: [],
            categories: [],
            slugName: '',
        };
    },
    async created() {
        const store = useCourseStore();
        this.courses = await store.fetchCourse();
    },
    methods: {
        async addToStore(courseId, courseName, price, image, discountPrice, teacher) {
            try {
                if (process.client) {
                    
                    const courses = JSON.parse(localStorage.getItem('basketItems')) ?? [];
                    const existingCourseIndex = courses.findIndex(course => course.id === courseId);

                if (existingCourseIndex === -1) {
                    const addToBasket = {
                        id: courseId,
                        price: price,
                        remove: false,
                        clear: false
                    };

                    const localStorageBasket = {
                        id: courseId,
                        name: courseName,
                        price: price,
                        image: image,
                        discountFee: discountPrice,
                        teacher: teacher,
                    }

                    courses.push(localStorageBasket);
                    localStorage.setItem('basketItems', JSON.stringify(courses));

                    const store = useBaskteStore();
                    store.addToBasket(addToBasket);

                    Swal.fire({
                        icon: "success",
                        title: courseName + " با موفقیت به سبد خرید شما اضافه شد ",
                    });
                } else {
                    Swal.fire({
                        icon: "warning",
                        title: "این دوره قبلا به سبد خرید شما اضافه شده است",
                    });
                }
                }
            } catch (error) {
                console.error('Error during add :', error);
            }
        },
    },
    computed: {
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

.forContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 35px;
}

.coursesSort {
    background: #F4F4F4;
    border-radius: 24px;
    height: 444px;
    margin-left: 20px;
    margin-bottom: 90px;
    width: 25%;
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
    flex-direction: row;
    justify-content: space-between;
    margin-right: 8%;
}

.courseTitle {
    padding-right: 7%;
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

@media (max-width : 1150px) {
    .coursesSort {
        width: 35%;
    }
}

@media (max-width : 850px) {
    .coursesSort {
        width: 45%;
    }
}

@media (max-width : 650px) {
    .coursesSort {
        width: 100%;
        font-size: 12px;
    }
}

@media (max-width : 510px) {
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