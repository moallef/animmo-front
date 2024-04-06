<template>
    <div>
        <div class="background">
            <img id="bground" :src="`https://animmo.ir/${blog.banner}`" alt="">
        </div>
    </div>
</template>

<script>
import { useTheBlog } from '~/store/theBlogStore';

export default{
    data() {
        return {
            blog: [],
        };
    },
    async beforeCreate() {
        this.blog = useTheBlog().getTheBlog();
    },
}
</script>

<style scoped>
#bground {
    width: 100%;
}
</style>