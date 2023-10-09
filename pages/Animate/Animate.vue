<template>
    <div>
        <header>
            <header-app />
        </header>
        <div>

            <course-section />

            <majorCourses />

        </div>
        <footer>
            <footer-app />
        </footer>
    </div>
</template>

<script>
import header from './header.vue'
import footer from './footer.vue'
import course from './HomePage/course.vue'
import majorCourses from './HomePage/majorCourses'

export default {
    components: {
        "header-app": header,
        "footer-app": footer,
        "course-section": course,
        "major-Courses" : majorCourses
    }
}
</script>

<style scoped></style>