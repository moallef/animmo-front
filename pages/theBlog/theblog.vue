<template>
    <div>
        <div class="content">

            <div class="header">
                <h1>
                    {{ blog.title }}
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
                    نوشته شده توسط {{ blog.user }}
                </p>
                <p class="date">
                    {{ blog.created }}
                </p>
            </div>
            <div class="blogContent">
                <div v-html="'<div>' + blog.body + '</div>'" id="blogContent"></div>
            </div>
            <div class="theList">

            </div>
        </div>
    </div>
</template>

<script>
import { useTheBlog } from '~/store/theBlogStore';

export default {
    name: 'FrontendTheBlog',
    data() {
        return {
            blog: {},
        };
    },
    async created() {
        const store = useTheBlog();
        this.blog = store.getTheBlog();
    },
    methods: {
    }
};
</script>

<style lang="scss" scoped>
@font-face {
    font-family: 'Yekan Bakh';
    src: url('../assets/Fonts/YekanBakhRegular/YekanBakh-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

.content {
    border-radius: 35px 35px 0px 0px;
    z-index: 4;
    padding-inline: 5%;
    background: white;
    width: 100%;
    padding-top: 30px;
}

h1 {
    font-family: 'Yekan Bakh', sans-serif;
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
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 8px;
    letter-spacing: 0em;
    color: #979797;
    margin-top: 90px;
}

.date {
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 8px;
    letter-spacing: 0em;
    color: #C9C9C9;
    margin-top: 20px;
}

.blogContent {
    width: 70%;
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    margin-top: 40px;
}
</style>