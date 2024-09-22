import { defineStore } from "pinia";
import { uid, Notify } from 'quasar'
import { computed, ref, reactive } from "vue";

export const useStoreSettings = defineStore('settings', () => {

  // state
  const settings = reactive({
    promptToDelete: true,
    showRunnningBalance: false,
    currencySymbol: '$'
  })

  // getters


  // actions


  // returns
  return {
  // state
  settings

  // getters


  // actions

  }

})
