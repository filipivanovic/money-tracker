<template>
  <router-view />
</template>

<script setup>

import { useStoreSettings } from "stores/storeSettings"
import { useStoreEntries } from "stores/storeEntries"
import { onMounted } from "vue";

defineOptions({
  name: 'App'
});

const storeSettings = useStoreSettings()
const storeEntries = useStoreEntries()

onMounted(() => {
  storeSettings.loadSettings()
  storeEntries.loadEntries()
})

window.addEventListener('contextmenu', e => {
  e.preventDefault()
})

</script>
