import { defineStore } from "pinia";
import * as axios from "axios";

export const useUserPannel = defineStore("UserPannel", {
  state: () => ({
    userCourses : '',
    JWT : ''
  }),


  actions: {

    async fetchUserPannel() {
        if (process.client) {
            const JWT = localStorage.getItem("token");
      try {
        
        const response = await axios.get(
          "https://animmo.ir/api/user_panel/my_course/",
          {
            headers: {
              Authorization: `Bearer ${JWT}`,
            },
          }
        );
        const userCourses = response.map((element) => ({
            user : element.user,
            id : element.course.id,
            course : element.course.course,
            image : element.course.image,
            spot_player_license: element.course.spot_player_license,
            price : element.course.price,
            discount : element.course.discount,
            duration : element.course.duration,
            teacher : element.course.teacher,
            updated : element.course.updated,
            teacher : element.course.teacher,
            category : element.course.category,
            subcategory : element.course.subcategory,
            createdAt: element.course.created,
          }));
          this.userCourses = userCourses;
          console.log(this.userCourses);
          return userCourses
      } catch (error) {
        console.error(error);
      }
    }
}
  },
});
