<template>
    <div>
        <header-app/>

        <div class="bag-Content">
            <bag-Content/>
        </div>
        <div class="footer">
            <footer-app/>
        </div>
    </div>
</template>

<script>
import header from "../header.vue";
import footer from "../footer.vue";
import bagContent from './bagContent.vue'

export default {
    components:{
        "header-app": header,
        "footer-app": footer,
        "bag-Content": bagContent,
    }
}
</script>

<style scoped>
.footer{
    margin-top: 200px;
}
</style>