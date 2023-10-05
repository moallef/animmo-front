<template>
    <header>
        <header-app />
    </header>
    <main>
        <home-page />
    </main>
    <footer>
        <footer-app />
    </footer>
</template>

<script>
import header from './header.vue'
import footer from './footer.vue'
import home from './home.vue'



    export default{
        components:{
            "header-app" : header,
            "footer-app" : footer,
            "home-page" : home,

        }
    }
</script>

<style>
body{
    margin: 0;
    padding: 0;
}
button{
    cursor: pointer;
}
</style>