<template>
    <div>
        <image-Slider/>
        <course-section/>
        <classification/>
        <work-Samples />
        <major-Courses />
        <students-Ideas />
    </div>
</template>

<script>
import imageSlider from './imageSlider.vue'
import course from './course.vue'
import workSamples from './workSamples.vue'
import classification from './classification.vue'
import majorCourses from './majorCourses.vue'
import studentsIdeas from './studentsIdeas.vue'


    export default{
        components: {
            "work-Samples" : workSamples,
            "image-Slider" : imageSlider,
            "course-section" : course,
            "classification" : classification,
            "major-Courses" : majorCourses,
            "students-Ideas" : studentsIdeas,
        }
    }
</script>

<style scoped>

</style>