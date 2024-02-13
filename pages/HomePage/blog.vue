<template>
    <div class="blogComponent">
        <div class="title">
            <p>وبلاگ</p>
        </div>
        <div class="theBlog">
            <theBlog v-for="(blog, index) in blogs" :key="index" :index="index" />
        </div>
        <div class="showMore">
            <nuxt-link to="/blogs">
                <button class="moreBtn">
                    مشاهده همه
                    <img src="../../assets/icons/Vector (1).png" alt="">
                </button>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import theBlog from './theBlog.vue';
import { useBlogStore } from '~/store/blogStore.js';

export default {
    components: {
        "theBlog": theBlog,
    },
    data() {
        return {
            blogs: [],
        };
    },
    async created() {
        this.blogs = await useBlogStore().fetchBlog();
    },
};
</script>

<style scoped>
@font-face {
    font-family: 'Yekan Bakh';
    src: url('/assets/Fonts/Yekan Bakh Regular/Yekan Bakh Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
.blogComponent {
    text-align: right;
    width: 100%;
    margin-bottom: 50px;
}

.theBlog {
    width: 45%;
}

.title {
    font-family: 'Yekan Bakh', sans-serif;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 50px;
    padding-right: 50px;
}

.title p {
    font-size: 40px;
    font-weight: 600;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: right;
}

.moreBtn {
    color: white;
    width: 9%;
    height: 49px;
    border-radius: 49px;
    background: #8569C2;
    border: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    display: block;
    margin: auto;
    margin-top: 50px;
}

@media (max-width : 1150px) {
    .moreBtn {
        width: 13%;
    }
}

@media (max-width : 920px) {
    .theBlog {
        width: 100%;
    }
}

@media (max-width : 780px) {
    .moreBtn {
        width: 16%;
    }

    .moreBtn {
        width: 20%;
        margin-top: 100px;
    }

    .theBlog {
        width: 100%;
    }
}

@media (max-width : 520px) {
    .moreBtn {
        width: 30%;
        height: 40px;
        margin-top: 100px;
    }
}</style>