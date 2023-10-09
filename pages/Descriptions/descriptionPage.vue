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

export default {
    components: {
        "header-app": header,
        "footer-app": footer,
    }
}
</script>

<style scoped></style>