<template>
    <div>
        <div class="slider">
            <image-Slider/>
        </div>
        <div class="courses">
            <course-section/>
            <classification/>
        </div>
        <work-Samples />
        <!-- <latest-Courses /> -->
        <!-- <students-Comments /> -->
        <blog-Component />
    </div>
</template>

<script>
import imageSlider from './imageSlider.vue'
import course from './course.vue'
import workSamples from './workSamples.vue'
import classification from './classification.vue'
import latestCourses from './latestCourses.vue'
import studentsComments from './studentsComments.vue'
import Blog from '../HomePage/blog.vue'


    export default{
        components: {
            "image-Slider" : imageSlider,
            "course-section" : course,
            "classification" : classification,
            "work-Samples" : workSamples,
            "latest-Courses" : latestCourses,
            "students-Comments" : studentsComments,
            "blog-Component" : Blog,
        }
    }
</script>

<style>
.slider{
    margin-top: 30px;
}
</style>
