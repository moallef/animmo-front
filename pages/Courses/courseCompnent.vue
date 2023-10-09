<template>
    <div>
        <header>
            <header-app />
        </header>
        <div>
            <course-section/>
        </div>
        <footer>
            <footer-app/>
        </footer>
    </div>
</template>

<script>
import header from './header.vue'
import footer from './footer.vue'
import course from '../course.vue'

export default {
    components: {
        "header-app": header,
        "footer-app": footer,
        "course-section" : course,
    }
}
</script>

<style scoped></style>