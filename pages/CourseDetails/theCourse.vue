<template>
    <div v-if="theCourse" class="courses">
        <div class="theCourse">
            <img class="courseImage" :src="`https://animmo.ir/${theCourse.image}`" alt="">
            <div class="details">
                <div class="productName">
                    <p class="title">{{ theCourse.course }}</p>
                    <p class="teacher">{{ theCourse.teacher }}</p>
                </div>
                <div class="productTime">
                    <p class="seasonsCount">
                        <img src="../../assets/icons/clock-3-16.png" alt="">
                        فصل
                        {{ theCourse.season }}
                        <img src="" alt="">
                    </p>
                    <p class="courseDurationInHours">
                        <img src="../../assets/icons/pngaaa.com-630491.png" alt="">
                        ساعت
                        {{ theCourse.duration }}
                        <img src="" alt="">
                    </p>
                </div>
                <div class="courseFee">
                    <p class="primaryFee">
                        {{ theCourse.price }}
                        هزار تومان
                    </p>
                    <p class="discountedFee">
                        {{ theCourse.discount }}
                        هزار تومان
                    </p>
                </div>
            </div>
        </div>
        <div class="btnHolder">
            <button class="addToCards" @click="sendToLocalStorage(theCourse.id , theCourse.course ,theCourse.price , theCourse.image , theCourse.off_price, theCourse.teacher)">
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

export default {
    data() {
        return {
            theCourse: null,
        };
    },
    async created() {
        const store = useCourseViewStore();
        this.theCourse = await store.sendId();
    },
    methods: {
        sendToLocalStorage() {
            const { id, course, price, image, off_price, teacher } = this.theCourse;
            const localStorageBasket = {
                id: id,
                name: course,
                price: price,
                image: image,
                discountFee: off_price,
                teacher: teacher,
            };

            let courses = JSON.parse(localStorage.getItem('basketItems')) || [];
            courses.push(localStorageBasket);
            localStorage.setItem('basketItems', JSON.stringify(courses));
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

.discountedFee {
    color: #C8102E;
    margin-right: 55%;
    width: 50%;
    margin-top: -20px;
}
</style>