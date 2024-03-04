<template>
    <div>
        <header>
            <header-app />
        </header>

        <div class="navBar">
            <navbar />
        </div>
        <div class="content">
            <div class="descriptions">
                <course-description />
            </div>
            <div class="theCourse">
                <theCourse />
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
.navBar {
    margin-top: 10px;
}

.content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;
}

.descriptions {
    width: 60%;
    margin-right: 3%;
}

.theCourse {
    width: 30%;
}

.theCourse {
    margin-bottom: 40px;
}

.assosiateCourses {
    margin-top: 100px;
}

@media (max-width: 900px) {
    .content {
        flex-direction: column-reverse;
    }
    .descriptions {
        margin-inline: 10%;
        width: 80%;
    }

    .theCourse {
        width: 80%;
        margin-inline: 10%;
    }
}
</style>