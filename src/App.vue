<template>
  <router-view />
</template>

<script setup>

import { useStoreSettings } from "stores/storeSettings"
import { useStoreEntries } from "stores/storeEntries"
import { onMounted } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

defineOptions({
  name: 'App'
});

const storeSettings = useStoreSettings()
const storeEntries = useStoreEntries()

onMounted(() => {
  storeSettings.loadSettings()
  storeEntries.loadEntries()

  ipcRenderer.on('show-settings', () => {
    router.push('/settings')
  })
})

window.addEventListener('contextmenu', e => {
  e.preventDefault()
})

</script>
