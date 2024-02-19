<template>
    <div>
        <div class="blogs">
            <div class="theBlog">
                <div class="blogPoster">
                    <img :src="`https://animmo.ir/${blog.imgSrc}`" alt="">
                </div>
                <div class="blogTxt">
                    <div class="theBlogTitle">
                        <p>{{ blog.title }}</p>
                    </div>
                    <div class="theBlogDescription">
                        <p>{{ truncateText(blog.body, maxLength) }}</p>
                    </div>
                    <nuxt-link :to="`/theBlog/${blog.id}`">
                        <button class="readMore">
                            خواندن
                            <img src="../../assets/icons/blogLeftArrow.png" alt="">
                        </button>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { useBlogStore } from '~/store/blogStore.js';

export default {
    name: 'TheBlog',
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
    methods:{
        truncateText(text, maxLength){
            if (text.length > maxLength) {
                return text.slice(0, maxLength) + '...';
            }
            return text
        }
    }
};
</script>

<style scoped>
@font-face {
    font-family: 'Yekan Bakh';
    src: url('/assets/Fonts/YekanBakhRegular/YekanBakh-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
.theBlog {
    margin: 10px 8%;
}
.blogPoster img {
    width: 35%;
    height: 193px;
    border-radius: 8px;

}

.blogTxt {
    margin-right: 40%;
    margin-top: -193px;
    width: 60%;
}

.theBlogTitle {
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 25px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    margin-bottom: 20px;
    margin-top: 10px;
}

.theBlogDescription {
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
}
.theBlogDescription p{
    color: #979797;
}
.readMore {
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
    color: #8569C2;
    background: none;
    border-radius: 49px;
    border: 2px solid #8569C2;
    height: 40px;
    width: 20%;
    margin-top: 20px;
}

.readMore:hover {
    background: #F4F4F4;
}

@media (max-width : 1300px) {
    .readMore {
        width: 30%;
    }
}

@media (max-width : 780px) {
    .readMore {
        height: 30px;
        width: 50%;
        margin-right: 50%;
    }

    .theBlogTitle {
        font-size: 16px;
    }

    .theBlogDescription {
        font-size: 11px;
    }
}
</style>