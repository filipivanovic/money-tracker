import { defineStore } from "pinia";
import { Dark, LocalStorage } from 'quasar'
import { computed, ref, reactive, watch } from "vue";

export const useStoreSettings = defineStore('settings', () => {

  // state
  const settings = reactive({
    promptToDelete: true,
    showRunnningBalance: false,
    currencySymbol: '$',
    darkMode: false // false, true, auto
  })

  // watch dark mode
  watch(() => settings.darkMode, value => {
    Dark.set(value)
  }, {immediate: true})

  // watch settings
  watch(settings, () => {
    console.log('settings,', settings)
    saveSettings()
  })

  // getters


  // actions
  const saveSettings = () => {
    LocalStorage.set('settings', settings)
  }

  const loadSettings = () => {
    const savedSettings = LocalStorage.getItem('settings')
    if (savedSettings) Object.assign(settings, savedSettings)
  }


  // returns
  return {
  // state
  settings,

  // getters


  // actions
  loadSettings
  }

})
