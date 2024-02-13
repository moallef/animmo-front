<template>
    <div class="theBlog">
        <div class="line"></div>
        <div class="container">
            <nuxt-link to="/theBlog">
                <img class="blogCover" :src="`https://animmo.ir/${blog.imgSrc}`" alt="">
                <div class="description">
                    <p class="title">
                        {{ blog.title }}
                    </p>
                    <p class="annonation">
                        {{ truncateText(blog.body, maxLength) }}
                    </p>
                </div>
                <div class="address">
                    <p class="author">
                        {{ blog.user }}
                    </p>
                    <p class="date">
                        {{ blog.createdAt }}
                    </p>
                </div>
            </nuxt-link>
            <div class="save">
                <button @click="chnageIcon">
                    <img :src="iconBoolian ? savedIcon : unsavedIcon" alt="ذخیره">
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import unsavedIcon from "../../assets/icons/saveIcon.png"
import savedIcon from "../../assets/icons/savedIcon.png"
import { useBlogStore } from '~/store/blogStore.js'

export default {
    name: 'FrontendTheBlog',

    props: {
        index: Number,
    },
    data() {
        return {
            blog: {},
            maxLength: 60,
        };
    },
    async beforeCreate() {
        const store = useBlogStore();
        const blogs = await store.fetchBlog();
        this.blog = blogs[this.index] || {};
    },
    methods: {
        truncateText(text, maxLength) {
            if (text.length > maxLength) {
                return text.slice(0, maxLength) + '...';
            }
            return text
        },
        chnageIcon() {
            this.iconBoolian = !this.iconBoolian
        }
    },
};
</script>

<style lang="scss" scoped>
@font-face {
    font-family: 'Yekan Bakh';
    src: url('~/assets/Fonts/Yekan Bakh Regular/Yekan Bakh Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
.theBlog {
    width: 48%;
    margin-top: 50px;
    margin-left: 1%;
}

a {
    color: black;
}

.line {
    border: 1px solid #C9C9C9;
    margin-bottom: 20px;
    width: 95%;
}

.blogCover {
    width: 30%;
}

.description {
    margin-right: 40%;
    margin-top: -190px;
}

.title {
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
}

.annonation {
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: #979797;
    margin-top: 10px;

}

.address {
    margin-right: 40%;
    margin-top: 90px;
}

.author {
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0em;
    color: #979797;
}

.date {
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0em;
    color: #C9C9C9;
    margin-top: 5px;
}

.save {
    margin-right: 90%;
    margin-top: -30px;
}

button {
    background: none;
    border: none;
}
</style>