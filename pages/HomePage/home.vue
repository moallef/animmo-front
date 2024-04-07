<template>
    <div>
        <Suspense class="slider">
            <image-Slider />
        </Suspense>
        <div class="courses">
            <Suspense>
                <course-section />
            </Suspense>
            <Suspense>
                <classification @data-emitted="handleDataFromChild" />
            </Suspense>
        </div>
        <Suspense>
            <work-Samples />
        </Suspense>
        <!-- <latest-Courses /> -->
        <!-- <students-Comments /> -->
        <Suspense>
            <blog-Component />
        </Suspense>
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


export default {
    data() {
        return {
            items: []
        }
    },
    components: {
        "image-Slider": imageSlider,
        "course-section": course,
        "classification": classification,
        "work-Samples": workSamples,
        "latest-Courses": latestCourses,
        "students-Comments": studentsComments,
        "blog-Component": Blog,
    },
    methods: {
        handleDataFromChild(data) {
            this.items = data
            this.$emit('data-emitted', this.items)
        }
    }
}
</script>

<style></style>
