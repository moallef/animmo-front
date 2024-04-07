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
                    <nuxt-link :to="`/theBlog/${blog.id}`" @click="readTheBlog(blog.id , blog.title , blog.body , blog.user , blog.created , blog.imgSrc) ">
                        <button class="readMore">بیشتر
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
import { useTheBlog } from '@/store/theBlogStore'

export default {
    name: 'TheBlog',
    data() {
        return {
            blogSetter: {},
            maxLength: 60,
        };
    },
    props: {
        blog: {
            type: Object,
            required: true
        }
    },
    async beforeCreate() {
        const store = useBlogStore();
        const blogs = await store.fetchBlog();
        this.blogSetter = blogs[this.index] || {};
    },
    methods:{
        truncateText(text, maxLength){
            if (text.length > maxLength) {
                return text.slice(0, maxLength) + '...';
            }
            return text
        },
        readTheBlog(id , title , body , user , created , imgSrc){
            try {
                const theBlog = {
                    id : id, 
                    title : title, 
                    body : body,
                    user : user,
                    created : created,
                    banner  : imgSrc 
                }
                const store =  useTheBlog().getTheBlog(theBlog);
                return store
            } catch (error) {
                console.log(error);
            };
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
    margin: 10px 4%;
    margin-top: 80px;
}
.blogPoster img {
    width: 20%;
    height: 193px;
    border-radius: 8px;

}

.blogTxt {
    margin-right: 25%;
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