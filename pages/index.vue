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
import home from './HomePage/home.vue'



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
    direction: rtl;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}
.routerLink{
    cursor: pointer;
}
a{
    text-decoration: none;
}

button{
    cursor: pointer;
}
</style>