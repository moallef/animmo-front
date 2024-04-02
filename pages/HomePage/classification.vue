<template>
    <div>
        <div class="classification">
            <div class="courses">
                <courses-Sort @data-emitted="handleDataFromChild" :index="index" />
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
import { useCourseStore } from '~/store/courseStore';

export default {
    components: {
        "courses-Sort": coursesSort
    },
    data() {
        return {
            courses: [],
            itemsFromChild: []
        };
    },
    async created() {
        this.courses = await useCourseStore().fetchCourse();
    },
    methods: {
        handleDataFromChild(data) {
            this.itemsFromChild = data;
            this.$emit('data-emitted', this.itemsFromChild);
        },
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

a {
    color: white;
}

#classifications {
    font-family: 'Yekan Bakh', sans-serif;
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
    width: 100%;
    min-width: 315px;
    margin-bottom: 50px;
}

.courses {
    margin-top: 60px;
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