<template>
    <div>
        <header>
            <header-app/>
        </header>

        <div class="belt">
            <belt />
        </div>

        <div class="workSample">
            <work-Samples/>
        </div>
        
        <footer>
            <footer-app/>
        </footer>
    </div>
</template>


<script>
import header from '../header.vue'
import footer from '../footer.vue'
import workSamples from './theWorkSample.vue'
import belt from './workSampleBelt.vue'

export default{
    components:{
        "header-app": header,
        "footer-app": footer,
        "work-Samples": workSamples,
        "belt" : belt,
    }
}
</script>
<style>
.workSample{
    margin-top: 50px;
    display: block;
    width: 30%;
}
.belt{
    margin-top: 30px;
}

</style>