import { defineStore } from "pinia";
import { Dark } from 'quasar'
import { computed, ref, reactive, watch } from "vue";

export const useStoreSettings = defineStore('settings', () => {

  // state
  const settings = reactive({
    promptToDelete: true,
    showRunnningBalance: false,
    currencySymbol: '$',
    darkMode: false // false, true, auto
  })

  watch(() => settings.darkMode, value => {
    Dark.set(value)
  }, {immediate: true})

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
