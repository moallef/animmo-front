<template>
    <div class="latestCourses">
        <div>
            <p class="title">جدیدترین دوره ها</p>
        </div>

        <div class="slider">

            <Swiper class="Swiper" :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view='isMobile ? 1 : 3'
                :loop="false" :effect="'creative'" :autoplay="sliderAutoPlay = {
                    delay: 3000,
                }" :creative-effect="{
    prev: {
        shadow: false,
        translate: ['-100%', 0, -1],
    },
    next: {
        translate: ['100%', 1, 0],
    },
}">
                <SwiperSlide class="courses" v-for="course in courses" :key="courses.componentSrc">
                    <theLatestCourse />
                </SwiperSlide>

            </Swiper>
        </div>

        <div class="sliderBtn">
            <button class="righArrow">
                <img src="../../assets/icons/rightScrol.png" alt="">
            </button>

            <button class="leftArrow">
                <img src="../../assets/icons/leftScrol.png" alt="">
            </button>
        </div>

    </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import theLatestCourse from './theLatestCourse.vue'

export default {
    components: {
        "theLatestCourse": theLatestCourse,
    },
    data() {
        return {
            playing: false,
            courses: [
                { componentSrc: theLatestCourse },
                { componentSrc: theLatestCourse },
                { componentSrc: theLatestCourse },
                { componentSrc: theLatestCourse },
                { componentSrc: theLatestCourse },
                { componentSrc: theLatestCourse },
                { componentSrc: theLatestCourse },
            ],
            sliderAutoPlay: true
        }
    },
    setup() {
        const isMobile = ref(false)

        const handleResize = () => {
            isMobile.value = window.innerWidth < 600
        }

        onMounted(() => {
            handleResize()
            window.addEventListener('resize', handleResize)
        })

        onUnmounted(() => {
            window.removeEventListener('resize', handleResize)
        })

        return {
            isMobile
        }
    },
}
</script>

<style scoped>
@font-face {
    font-family: 'Yekan Bakh';
    src: url('../assets/Fonts/YekanBakhRegular/YekanBakh-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
* {
    display: block;
}

.latestCourses {
    margin-top: 50px;
    width: 100%;
    height: 440px;
    width: 100%;
    text-align: center;
}

.courses {
    width: 100%;
    padding-inline: 1%;
}

.title {
    font-size: 24px;
    font-weight: 600;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: center;
    margin-block: 20px;
    margin-bottom: 80px;
}

.slider {
    margin-left: 5%;
    margin-right: 5%;
}

.sliderBtn {
    margin-top: -220px;
}

.leftArrow {
    width: 12px;
    height: 24.49px;
    border: none;
    background: none;
    margin-right: 98%;
    margin-top: -20px;
}

.righArrow {
    width: 12px;
    height: 24.49px;
    border: none;
    background: none;
    margin-right: 1%;
}
@media (max-width : 600px) {
    .latestCourses {
        height: 500px;
}
.leftArrow {
    display: none;
}
.righArrow {
    display: none;
}

    
}
</style>