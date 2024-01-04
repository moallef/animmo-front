<template>
  <nuxt-link to="workSamples">
    <div class="productShowCase">
      <img class="sampleImg" :src="'http://127.0.0.1:8000/media/video/sample/moqaddame.mp4'" alt="Product Image">
      <button class="likeButtn">
        <img src="../../assets/icons/LikeBefore.png" alt="">
      </button>
      <div class="details">
        <p>fsdfsdfd</p>
        <p class="studentName">theSampleExercise</p>
        <div class="btn">
          <button>
            bhvnvbv
            <img src="../../assets/icons/icons8-arrow-left-24.png" alt="">
          </button>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>
  
<script>
import { useExerciseStore } from '~/store/exerciseStore.js';
import { toRaw } from 'vue';
export default {
  props: {
    exercise: Object,
  },
  data() {
    return {
      theSampleExercise: {},
    };
  },
  async beforeCreate() {
    this.theSampleExercise = this.exercise;
    // const store = useExerciseStore();
    // const exercise = await store.fetchExercise();
    // // TODO: this.index is undefined
    // // this.theSampleExercise = exercise[0];
    // this.theSampleExercise.sample_exercise = exercise[0].sample_exercise;
    // this.theSampleExercise.user = exercise[0].user;
    // this.theSampleExercise.user = exercise[0].course;
    // console.log('Child component received data:', toRaw(this.theSampleExercise).sample_exercise);
  },
  mounted() {

  },
};
</script>

<style >
p {
  color: #F4F4F4;
}

.sampleImg {
  display: block;
  /* margin-bottom: -20px; */
  width: 100%;
  border-radius: 18px;
}

.studentName {
  font-family: Yekan Bakh;
  font-size: 20px;
  font-weight: 700;
  line-height: 12px;
  letter-spacing: 0em;
  margin-top: 10px;
}

.productShowCase {
  margin-top: 40px;
  margin-right: 3%;
  width: 95%;
  text-align: right;
  padding-inline: 1%;
}

.likeButtn {
  border: none;
  border-radius: 50%;
  background: none;
  margin-right: 90%;
  margin-top: -30px;
  margin-bottom: 20px;
}

.likeButtn button {
  border: none;
  border-radius: 50%;
}

.details button {
  border: none;
  border-radius: 50%;
  background: #8569C2;
  margin-right: 92%;
  padding-top: 3px;
  padding-inline: 3px;
  margin-top: 20px;
}
</style>