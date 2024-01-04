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
import {useExerciseStore} from '~/store/exerciseStore'

export default{
    components:{
        "header-app": header,
        "footer-app": footer,
        "work-Samples": workSamples,
        "belt" : belt,
    },
    data() {
        return {
            exercises: [],
        };
    },
    async created() {
        this.exercises = await useExerciseStore().fetchExercise();
    },
}
</script>
<style>
.workSample{
    margin-top: 50px;
    width: 90%;
    margin-inline: 5%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
}
.belt{
    margin-top: 50px;
}

</style>