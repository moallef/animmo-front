<template>
    <div>
        <header>
            <header-app />
        </header>
        <div>

            <course-section />

            <latest-Courses />

        </div>
        <footer>
            <footer-app />
        </footer>
    </div>
</template>

<script>
import header from '../header.vue'
import footer from '../footer.vue'
import latestCourses from '../HomePage/latestCourses.vue'
import courseSection from '../HomePage/coursesSort.vue'

export default {
    components: {
        "header-app": header,
        "footer-app": footer,
        "latest-Courses": latestCourses,
        "course-section": courseSection,
    }
}
</script>

<style scoped></style>