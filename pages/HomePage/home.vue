<template>
    <div>
        <image-Slider/>
        <course-section/>
        <classification/>
        <work-Samples />
        <!-- <latest-Courses /> -->
        <students-Comments />
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
            "work-Samples" : workSamples,
            "image-Slider" : imageSlider,
            "course-section" : course,
            "classification" : classification,
            "latest-Courses" : latestCourses,
            "students-Comments" : studentsComments,
            "blog-Component" : Blog,
        }
    }
</script>

<style scoped>

</style>