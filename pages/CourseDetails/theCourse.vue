<template>
    <div v-if="theCourse" class="courses">
        <div class="theCourse">
            <video ref="videoPlayer" class="courseImage" controls :src="`https://animmo.ir/${theCourse.intro}`" @click="togglePlay" alt="Course Video"></video>
            <div class="details">
                <div class="productName">
                    <p class="title">{{ theCourse.course }}</p>
                    <p class="teacher">{{ theCourse.teacher }}</p>
                </div>
                <div class="productTime">
                    <p class="seasonsCount">
                        <img src="../../assets/icons/clock-3-16.png" alt="">
                        {{ theCourse.season }}
                        فصل
                        <img src="" alt="">
                    </p>
                    <p class="courseDurationInHours">
                        <img src="../../assets/icons/pngaaa.com-630491.png" alt="">
                        ساعت
                        {{ theCourse.duration }}
                        <img src="" alt="">
                    </p>
                </div>
                <div class="courseFee" v-if="theCourse.discount != theCourse.price">
                    <p class="primaryFee">
                        {{ formatPrice(theCourse.price) }}
                        تومان
                    </p>
                    <p class="discountedFee">
                        {{ formatPrice(theCourse.discount) }}
                        تومان
                    </p>
                </div>
                <div v-else>
                    <p class="fee">
                        {{ formatPrice(theCourse.discount) }}
                        تومان
                    </p>
                </div>
            </div>
        </div>
        <div class="btnHolder">
            <button class="addToCards"
                @click="sendToLocalStorage(theCourse.id, theCourse.course, theCourse.price, theCourse.image, theCourse.discount, theCourse.teacher)">
                افزودن به سبد خرید
            </button>
        </div>
    </div>
    <div v-else>
        Loading...
    </div>
</template>

<script>
import { useCourseViewStore } from '@/store/viewCourseStore';
import Swal from "sweetalert2";

export default {
    data() {
        return {
            theCourse: null,
            courses : []
        };
    },
    async created() {
        const store = useCourseViewStore();
        this.theCourse = await store.sendId();
    },
    methods: {
        async sendToLocalStorage(courseId, courseName, price, image, discountPrice, teacher) {
            try {
                if (process.client) {
                this.courses = JSON.parse(localStorage.getItem('basketItems')) ?? [];
                }
                const existingCourseIndex = this.courses.findIndex(course => course.id === courseId);


                if (existingCourseIndex === -1) {
                    const localStorageBasket = {
                        id: courseId,
                        name: courseName,
                        image: image,
                        price: price,
                        discountFee: discountPrice,
                        teacher: teacher,
                    }

                    this.courses.push(localStorageBasket);
                    
                    if (process.client) {
                        localStorage.setItem('basketItems', JSON.stringify(this.courses));
                    }
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
            } catch (error) {
                console.error('Error during add :', error);
            }
        },
        formatPrice(price) {
            return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        togglePlay() {
            const video = this.$refs.videoPlayer;
            if (this.isPlaying) {
                video.pause();
            } else {
                video.play();
            }
            this.isPlaying = !this.isPlaying;
        }
    }
};
</script>

<style scoped>
@font-face {
    font-family: 'Yekan Bakh';
    src: url('../assets/Fonts/YekanBakhRegular/YekanBakh-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

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
    margin-right: 5%;
}

.details {
    text-align: right;
}

.title {
    font-size: 19px;
    font-weight: 800;
    line-height: 15px;
    letter-spacing: -0.04em;
    margin-top: 10px;
    margin-right: 2%;
}

.teacher {
    margin-top: 10px;
    margin-right: 2%;
}

.btnHolder {
    margin-top: 25px;
    width: 112%;
    margin-right: -6%;
}

.addToCards {
    background: #8569C2;
    height: 40px;
    width: 100%;
    border-radius: 0px 0px 24px 24px;
    border: none;
    color: white;
    font-size: 14px;
}

.productTime {
    color: #979797;
    margin-top: -10px;
}

.courseDurationInHours {
    margin-right: 55%;
    margin-top: -20px;
}

.seasonsCount {
    margin-top: 20px;
    margin-right: 2%;
}

.courseDurationInHours img {
    width: 17px;
    opacity: 0.67;
}

.courseFee {
    margin-top: -15px;
}

.primaryFee {
    text-decoration: line-through;
    color: #646464;
    margin-top: 20px;
    margin-right: 2%;
}

.fee {
    color: #C8102E;
    margin-top: 20px;
    margin-right: 2%;
}

.discountedFee {
    color: #C8102E;
    margin-right: 55%;
    width: 50%;
    margin-top: -20px;
}
</style>