<template>
    <div>
        <header>
            <header-app />
        </header>

        <div class="navBar">
            <navbar />
        </div>

        <div class="content">
            <div class="theCourse">
                <theCourse />
            </div>

            <div class="descriptions">
                <course-description />
            </div>

        </div>


        <div class="assosiateCourses">
            <courses-sort />
        </div>

        <footer>
            <footer-app />
        </footer>
    </div>
</template>

<script>
import header from '../header.vue';
import footer from '../footer.vue';
import coursesSort from '../HomePage/coursesSort.vue';
import courseDescriptions from './courseDescriptions.vue';
import navBar from '../Animate/AnimateNav.vue';
import theCourse from './theCourse.vue'

export default {
    components: {
        "header-app": header,
        "footer-app": footer,
        "courses-sort": coursesSort,
        "course-description": courseDescriptions,
        "navbar": navBar,
        "theCourse": theCourse,
    },
    data() {
        return {
            courseList: [],
        }
    }
}
</script>

<style scoped>
.navBar{
    margin-top: 1000px;
}
.content{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
.descriptions{
    width: 60%;
    margin-right: 3%;
    margin-top: 50px;
}

.theCourse {
    width: 30%;
    margin-top: 50px;
    margin-right: 65%;
}
.assosiateCourses{
    margin-top: 100px;
}
@media (max-width: 1500px) {
    .descriptions{
        margin-top: -380px;
    }
}
@media (max-width: 1200px) {
    .descriptions{
        margin-top: -340px;
    }
}

@media (max-width: 1000px) {
    .descriptions{
        margin-top: -320px;
    }
}
@media (max-width: 700px) {
    .descriptions{
        margin-top: 50px;
        margin-inline: 10%;
        width: 80%;
    }
    .theCourse {
    width: 80%;
    margin-top: 50px;
    margin-inline: 10%;
}
}
</style>