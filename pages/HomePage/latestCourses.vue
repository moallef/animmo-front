<template>
    <div class="latestCourses">
        <div>
            <p class="title">جدیدترین دوره ها</p>
        </div>

        <div class="slider">
            
            <Swiper  :modules="[SwiperAutoplay, SwiperEffectCreative]"
            :slides-per-view="4" :loop="false"
            :effect="'creative'" :autoplay="sliderAutoPlay = {
                delay: 3000,
            }" :creative-effect="{
    prev: {
        shadow: false,
        translate: ['-100%', 0, -1],
    },
    next: {
        translate: ['100%', 0, 0],
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
import theLatestCourse from './theLatestCourse.vue'

export default {
    components: {
        "theLatestCourse": theLatestCourse,
    },
    data() {
        return {
            playing: false,
            courses: [
                { componentSrc : theLatestCourse },
                { componentSrc : theLatestCourse },
                { componentSrc : theLatestCourse },
                { componentSrc : theLatestCourse },
                { componentSrc : theLatestCourse },
                { componentSrc : theLatestCourse },
                { componentSrc : theLatestCourse },
            ],
            sliderAutoPlay: true
        }
    },
}
</script>

<style scoped>
* {
    display: block;
}

.latestCourses {
    margin-top: 50px;
    width: 100%;
    height: 350px;
    width: 100%;
    text-align: center;
}

.courses {
    height: 345px;
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
.slider{
    margin-left: 5%;
    margin-right: 5%;
}
.sliderBtn{
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
</style>