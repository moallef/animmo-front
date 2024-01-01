<template>
    <div>
        <div class="classification">
            <div>
                <p id="classifications">دسته بندی ها</p>
            </div>
            <div class="courses">
                <courses-Sort v-for="(course, index) in courses" :key="index" :index="index" />
            </div>
        </div>
    </div>
    <div>
        <nuxt-link to="/Courses">
            <button class="moreBtn">
                مشاهده همه
                <img src="../../assets/icons/Vector (1).png" alt="">
            </button>
        </nuxt-link>
    </div>
</template>
  
<script>
import coursesSort from './coursesSort.vue';
import { useCourseStore } from '~/store/courseStore.js';

export default {
    components: {
        "courses-Sort": coursesSort
    },
    data() {
        return {
            courses: [],
        };
    },
    async created() {
        this.courses = await useCourseStore().fetchCourse();
    },
};
</script>

<style scoped>
a {
    color: white;
}

#classifications {
    width: 100%;
    height: 12px;
    font-size: 24px;
    font-weight: 600;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: center;
}

.classification {
    list-style: none;
    height: 442px;
    width: 100%;
    min-width: 315px;
}

.courses {
    margin: auto;
    display: flex;
    justify-content: right;
    flex-wrap: wrap;
}

.moreBtn {
    color: white;
    width: 9%;
    height: 49px;
    border-radius: 49px;
    background: #8569C2;
    border: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    display: block;
    margin: auto;
    margin-top: 50px;
}

@media (max-width : 1150px) {
    .moreBtn {
        width: 13%;
    }
}

@media (max-width : 780px) {
    .moreBtn {
        width: 16%;
    }
}

@media (max-width : 780px) {
    .moreBtn {
        width: 20%;
    }
}

@media (max-width : 520px) {
    .moreBtn {
        width: 30%;
        height: 40px;
    }
}
</style>