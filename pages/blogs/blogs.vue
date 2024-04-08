<template>
    <div class="theBlog">
        <div class="line"></div>
        <div class="container">
            <nuxt-link :to="`/theBlog/${blog.id}`"  @click="readTheBlog(blog.id , blog.title , blog.body , blog.user , blog.created , blog.banner) ">
                <div class="image">
                    <img class="blogCover" :src="`https://animmo.ir/${blog.imgSrc}`" alt="">
                </div>
                <div class="blogText">
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
                </div>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import { useBlogStore } from '~/store/blogStore.js';
import { useTheBlog } from '@/store/theBlogStore'

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
        },
        readTheBlog(id , title , body , user , created , banner){
            try {
                const theBlog = {
                    id , 
                    title , 
                    body ,
                    user ,
                    created ,
                    banner
                }
                const store =  useTheBlog().getTheBlog(theBlog);
                return store
            } catch (error) {
                console.log(error);
            };
        }
    },
};
</script>

<style lang="scss" scoped>
@font-face {
    font-family: 'Yekan Bakh';
    src: url('../assets/Fonts/YekanBakhRegular/YekanBakh-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
.theBlog {
    display: flex;
    flex-direction: column;
    margin-right: 3%;
    width: 45%;
    margin-top: 50px;
}
.container{
    display: inline-flex;
}
.blogText{
    display: flex;
    flex-direction: column;
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
    width: 40%;
}

.description {
    margin-top: -190px;
    margin-right: 45%;

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
    margin-right: 45%;
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
button {
    background: none;
    border: none;
}
@media (max-width : 950px) {
    .description{
        margin-top: -140px;
    }
}

@media (max-width : 750px) {
    .theBlog{
        width: 95%;
    }
}
@media (max-width : 450px) {
    .description{
        margin-top: -130px;
    }
}
</style>