<template>
    <header>
        <header-app class="header" :courses="this.items" />
    </header>
    <main>
        <Suspense>
            <home-page @data-emitted="handleDataFromChild" />
        </Suspense>
    </main>
    <footer>
        <footer-app />
    </footer>
</template>

<script>
import header from './header.vue'
import footer from './footer.vue'
import home from './HomePage/home.vue'



export default {
    data() {
        return {
            items: []
        }
    },
    components: {
        "header-app": header,
        "footer-app": footer,
        "home-page": home,

    },
    methods: {
        handleDataFromChild(data) {
            this.items = data;
        },
    },
    computed: {
        test() {
            if (process.client) {
                this.items = JSON.parse(localStorage.getItem('basketItems'));
            }
        }
    },
    created() {
        if (process.client) {
            this.items = JSON.parse(localStorage.getItem('basketItems'));
        }
    }
}
</script>

<style>
@font-face {
    font-family: 'Yekan Bakh';
    src: url('../assets/Fonts/YekanBakhRegular/YekanBakh-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

body {
    direction: rtl;
}

p {
    color: black;
}

a {
    color: none;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

.routerLink {
    cursor: pointer;
}

a {
    text-decoration: none;
}

button {
    cursor: pointer;
}
</style>