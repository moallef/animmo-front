<template>
    <div>
        <header>
            <header-app />
        </header>

        <div class="belt">
            <belt/>
        </div>

        <div class="courseSection">
            <course-section/>
        </div>

        <footer>
            <footer-app/>
        </footer>
    </div>
</template>

<script>
import header from '../header.vue'
import footer from '../footer.vue'
import course from '../HomePage/coursesSort.vue'
import belt from './CourseBelt.vue'

export default {
    components: {
        "header-app": header,
        "footer-app": footer,
        "course-section" : course,
        "belt" : belt
    }
}
</script>

<style scoped>
.courseSection{
    width: 18%;
}

.courseSection{
    width: 90%;
    margin-inline: 5%;
    display: flex;
}
</style>