import { defineStore } from 'pinia';

export const useWebsiteInfoStore = defineStore('webInfo', {
  state: () => ({
    backupPhoneNumber1 : "",
    backupPhoneNumber2 : "",
    telegram_Channel : "",
    description : "زمان پاسخگویی تلفن از ساعت ۸ الی 16 روز های غیر تعطیل می باشد * برای ارسال تیکت می توانید در پروفایل خود از بخش تیکت استفاده کنید",
  }),

  actions: {
  },
});