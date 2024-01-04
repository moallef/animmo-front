import { defineStore } from "pinia";
import { getExercise } from "~/API/sampleExercise";

export const useExerciseStore = defineStore("exercise", {
  state: () => ({
    exercise: [],
  }),
  getters: {
    getExercise: (state) => state.exercise,
  },
  mutations: {
    SET_EXERCISE(state, exercise) {
      state.exercise = exercise;
    },
  },
  actions: {
    async fetchExercise() {
      try {
        if (this.exercise.length === 0) {
          const response = await getExercise();
          const exerciseData = response.map((element) => ({
            course: element.course,
            subcategory: element.subcategory,
            user: element.user,
            createdAt: element.created,
            category: element.category,
            sample_exercise: element.sample_exercise,
          }));
        //   this.SET_EXERCISE(exerciseData);
          return exerciseData;
        } else {
          return this.exercise;
        }
      } catch (error) {
        console.log("fetchExercise error: ", error);
        throw error;
      }
    },
  },
});
