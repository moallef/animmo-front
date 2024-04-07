<template>
    <div>
        <header>
            <header-app />
        </header>
        <div>
            <div class="nav">
                <Nav/>
            </div>

            <Suspense class="bg">
                <background/>
            </Suspense>
           
            
            <Suspense class="courseSection">
                <course-section />
            </Suspense>
            
            <Suspense class="latestCourses">
                <latest-Courses />
            </Suspense>

        </div>
        <footer>
            <footer-app />
        </footer>
    </div>
</template>

<script>
import header from '../header.vue'
import footer from '../footer.vue'
import course from './subcategories.vue'
import latestCourses from '../HomePage/latestCourses.vue'
import background from './AnimateBG.vue'
import Nav from './AnimateNav.vue'


export default {
    components: {
        "header-app": header,
        "footer-app": footer,
        "course-section": course,
        "latest-Courses" : latestCourses,
        "background": background,
        "Nav": Nav,
    }
}
</script>

<style scoped>
.latestCourses{
    margin-top: 60px;
}
.courseSection{
    border-radius: 32px;
    margin-top: -70px;
    background: white;
    position: relative;
    padding-top: 50px;
}
</style>