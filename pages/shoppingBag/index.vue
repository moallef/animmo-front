<template>
    <div>
        <header-app/>
        <div class="belt">
            <the-belt/>
        </div>
        <div class="content">
            <div class="bag-Content">
                <bag-Content/>
            </div>
            <div class="ultimateList">
                <ultimate-list/>
            </div>
        </div>
        <div class="footer">
            <footer-app/>
        </div>
    </div>
</template>

<script>
import header from "../header.vue";
import footer from "../footer.vue";
import belt from './belt.vue'
import bagContent from './bagContent.vue';
import ultimateList from './ultimateList.vue';

export default {
    components:{
        "header-app": header,
        "footer-app": footer,
        'the-belt': belt,
        "bag-Content": bagContent,
        "ultimate-list": ultimateList,
    }
}
</script>

<style scoped>
.content{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 20px;
    margin-inline: 5%;
}
.bag-Content{
    width: 69%;
}
.ultimateList{
    width: 29.5%;
}
@media (max-width : 750px) {
    .content{
        flex-direction: column;
    }
    .bag-Content{
    width: 100%;
    margin-top: 20px;
}
.ultimateList{
    width:100%;
}
}
</style>