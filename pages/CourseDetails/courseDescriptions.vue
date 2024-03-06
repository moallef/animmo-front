<template>
    <div>
        <div class="container" v-if="theCourse">
            <div class="description">
                <p id="description" class="title" >
                    {{ descriptionTitle }}
                </p>
                <div class="lineContaiter">
                    <div class="aboveLine"></div>
                    <div class="line"></div>
                </div>
                <p id="descriptionP" class="paragraph">
                    {{ theCourse.description }}
                </p>
            </div>
            <div class="courseContacts">
                <p id="courseContacts" class="title">
                    {{ courseContactsTitle }}
                </p>
                <div class="lineContaiter">
                    <div class="aboveLine"></div>
                    <div class="line"></div>
                </div>
                <p id="courseContactsP" class="paragraph">
                    {{ theCourse.contacts_course }}
                </p>
            </div>
            <div class="courseOutput">
                <p id="courseOutput" class="title">
                    {{ courseOutputTitle }}
                </p>
                <div class="lineContaiter" >
                    <div class="aboveLine" id="line3"></div>
                    <div class="line" ></div>
                </div>
                <p id="courseOutputP" class="paragraph">
                    {{ theCourse.target_course }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import {useCourseViewStore} from '@/store/viewCourseStore'
import theCourse from './theCourse.vue';

export default {

    data() {
        return {
            descriptionTitle: "توضیحات دوره",
            courseContactsTitle: " مخاطبین دوره ",
            courseOutputTitle: " خروجی دوره ",    
            theCourse: null,
        };
    },

    async created() {
        const store = useCourseViewStore();
        this.theCourse = await store.sendId();
    },

    mounted() {

    },

};
</script>

<style lang="scss" scoped>
.container {
    background: #F9F9F9;
    border-radius: 20px;
    box-sizing: border-box;
    padding-bottom: 60px;
}

.title {
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: justified;
    padding-top: 50px;
    padding-inline: 2%;
}

#description{
    padding-top: 20px;
}

.paragraph {
    color: #6D6D6D;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: -0.02em;
    text-align: right;
    padding-inline: 2%;
    padding-top: 10px;

}
.lineContaiter{
    margin-right: 2%;
    width: 95%;
    margin-bottom: 10px;
}
.line{
    border: 1px solid #C9C9C9;
}
.aboveLine{
    height: 5px;
    background: #8569C2;
    border-radius: 10px 10px 0px 0px;
    width: 30%;
}
#line3{
    width: 20%;
}


</style>