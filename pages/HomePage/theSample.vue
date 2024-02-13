<template>
  <nuxt-link to="workSamples">
    <div class="productShowCase">
      <img class="sampleImg" :src="`https://animmo.ir/${exercise.sample_exercise}`" alt="Product Image">
      <button class="likeButtn">
        <img src="../../assets/icons/LikeBefore.png" alt="">
      </button>
      <div class="details">
        <p> {{ exercise.user }}</p>
        <p class="studentName">{{ exercise.course }}</p>
        <div class="btn">
          <button>
            <img src="../../assets/icons/icons8-arrow-left-24.png" alt="">
          </button>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>
  
<script>
import { useExerciseStore } from '~/store/exerciseStore.js';

export default {
  props: {
    exercise: Object,
  },
  data() {
    return {
      theSampleExercise: {},
    };
  },
  async created() {
        const store = useExerciseStore();
        const exercise = await store.fetchExercise();
        this.theSampleExercise = exercise[this.index] || {};
    },
  mounted() {

  },
};
</script>

<style >
@font-face {
    font-family: 'Yekan Bakh';
    src: url('/assets/Fonts/Yekan Bakh Regular/Yekan Bakh Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
p {
  color: #F4F4F4;
}

.sampleImg {
  display: block;
  margin-bottom: -20px;
  width: 100%;
  border-radius: 18px;
}

.studentName {
  font-family: 'Yekan Bakh', sans-serif;
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