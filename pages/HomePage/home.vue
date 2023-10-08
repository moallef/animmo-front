<template>
    <div>
        <image-Slider/>
        <course-section/>
        <classification/>
        <work-Samples />
        <major-Courses />
        <students-Comments />
    </div>
</template>

<script>
import imageSlider from './imageSlider.vue'
import course from './course.vue'
import workSamples from './workSamples.vue'
import classification from './classification.vue'
import majorCourses from './majorCourses.vue'
import studentsComments from './studentsComments.vue'


    export default{
        components: {
            "work-Samples" : workSamples,
            "image-Slider" : imageSlider,
            "course-section" : course,
            "classification" : classification,
            "major-Courses" : majorCourses,
            "students-Comments" : studentsComments,
        }
    }
</script>

<style scoped>

</style>