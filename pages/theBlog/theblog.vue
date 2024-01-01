<template>
    <div>
        <div class="content">

            <div class="header">
                <h1>
                    {{ blogTitle }}
                </h1>
                <div class="buttons">
                    <button id="share">
                        <img src="../../assets/icons/share-2.png" alt="">
                    </button>
                    <button id="save">
                        <img src="../../assets/icons/Vector (7).png" alt="">
                    </button>
                </div>
            </div>
            <div class="aboutBlog">
                <p class="author">
                    {{ author }} نوشته شده توسط
                </p>
                <p class="date">
                    {{ date }}
                </p>
            </div>
            <div class="blogContent">
                <p id="blogContent">
                    {{ blogContent }}
                </p>
            </div>
            <div class="theList">

            </div>
        </div>
    </div>
</template>

<script>
import { useBlogStore } from '~/store/blogStore.js';

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
        }
    }
};
</script>

<style lang="scss" scoped>
.content {
    border-radius: 35px 35px 0px 0px;
    z-index: 4;
    margin-inline: 5%;
}

h1 {
    font-family: Yekan Bakh;
    font-size: 42px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    margin-top: 50px;
    height: 0px;

}

.buttons button {
    background: none;
    border: none;
    margin-right: 90%;
    display: block;
    width: 5%;
    text-align: right;
    height: 0px;
}

#save {
    text-align: left;

}

.author {
    font-family: Yekan Bakh;
    font-size: 18px;
    font-weight: 400;
    line-height: 8px;
    letter-spacing: 0em;
    color: #979797;
    margin-top: 90px;
}

.date {
    font-family: Yekan Bakh;
    font-size: 16px;
    font-weight: 400;
    line-height: 8px;
    letter-spacing: 0em;
    color: #C9C9C9;
    margin-top: 20px;
}

.blogContent {
    width: 70%;
    font-family: Yekan Bakh;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    margin-top: 40px;
}
</style>