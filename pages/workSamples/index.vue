<template>
    <div>
        <header>
            <header-app/>
        </header>

        <div>
            <work-Samples/>
        </div>
        
        <footer>
            <footer-app/>
        </footer>
    </div>
</template>

<style>
</style>

<script>
import header from '../header.vue'
import footer from '../footer.vue'
import workSamples from '../HomePage/workSamples.vue'

export default{
    components:{
        "header-app": header,
        "footer-app": footer,
        "work-Samples": workSamples,
    }
}
</script>